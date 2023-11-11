<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * class khusus tabel tb_account
*/
class SalesModel extends CI_Model {
    public $tableName;

    public function __construct(){
        parent::__construct();
        $this->tableName = "stok";
    }

    public function selectProduk($id_item){
        $this->db->select('jumlah_stok');
        $this->db->from($this->tableName);
        $this->db->where('id_item', $id_item);

        $x = $this->db->get()->row()->jumlah_stok;
        return($x);
    }

    public function selectPenjualan(){
        $this->db->select_sum('pendapatan');
        $this->db->from('penjualan');
        $x = $this->db->get()->row()->pendapatan;
        return($x);
    }
}

/* End of file tb_account_model.php */
/* Location: ./application/models/tb_account_model.php */
