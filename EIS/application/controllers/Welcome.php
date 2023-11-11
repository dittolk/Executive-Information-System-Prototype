<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		if (($this->session->userdata['logged_in'])) {
			$username = $this->session->userdata('username');
			$data['username']=$username;
			$data['penjualan1'] = $this->SalesModel->selectPenjualan();
			$data['stok1'] = $this->SalesModel->selectProduk(1);
			$this->load->view('index', $data);
		} else {
			header("location: login_form");
		}

	}


	public function index_stock()
	{
		if (($this->session->userdata['logged_in'])) {
			$username = $this->session->userdata('username');
			$data['username']=$username;
			$data['penjualan1'] = $this->SalesModel->selectPenjualan();
			$data['stok1'] = $this->SalesModel->selectProduk(1);
			$this->load->view('index_stock', $data);
		} else {
			header("location: login_form");
		}


	}

	public function index_dirut()
	{
		if (($this->session->userdata['logged_in'])) {
			$username = ($this->session->userdata['username']);
			$data['username']=$username;
			$data['penjualan1'] = $this->SalesModel->selectPenjualan();
			$data['stok1'] = $this->SalesModel->selectProduk(1);
			$this->load->view('index_dirut', $data);

		} else {
			header("location: login_form");
		}

	}


	////////////////////////////////////
	///////////////////////////////////
	///////////////////////////////////
	public function __construct() {
	parent::__construct();
			// Load form helper library
		$this->load->helper('form');

		// Load form validation library
		$this->load->library('form_validation');

		// Load session library
		$this->load->library('session');

		// Load database
		$this->load->model('login_database');

	}


	// Show login page
	public function index_login() {
		$this->load->view('login_form');
	}



	// Check for user login process
	public function user_login_process() {

		$this->form_validation->set_rules('username', 'Username', 'trim|required');
		$this->form_validation->set_rules('password', 'Password', 'trim|required');

		if ($this->form_validation->run() == FALSE) {
			if(($this->session->userdata['logged_in'])){
				$data['penjualan1'] = $this->SalesModel->selectPenjualan();
				$data['stok1'] = $this->SalesModel->selectProduk(1);
				//$this->load->view('index', $data);
				}else{
					$this->load->view('login_form');
				}
				} else {
					$data = array(
					'username' => $this->input->post('username'),
					'password' => $this->input->post('password')
				);
					$result = $this->login_database->login($data);

				if ($result == TRUE) {
				$username = $this->input->post('username');
				$result = $this->login_database->read_user_information($username);
					if ($result != false) {
						$session_data = array(
							'logged_in'=>TRUE,
						'username' => $result[0]->username
						//'email' => $result[0]->user_email,
						);
						// Add user data in session
						$data['penjualan1'] = $this->SalesModel->selectPenjualan();
						$data['stok1'] = $this->SalesModel->selectProduk(1);
						$this->session->set_userdata($session_data);
						$this->load->view('index', $data);
					}
				} else {
					$data = array(
					'error_message' => 'Invalid Username or Password'
				);
					$this->load->view('login_form', $data);
			}
		}
	}

	// Logout from admin page
	public function logout() {
		// Removing session data
		$sess_array = array(
		'username' => ''
	);
		$this->session->unset_userdata('logged_in', $sess_array);
		$data['message_display'] = 'Successfully Logout';
		$this->load->view('login_form', $data);
	}

}
