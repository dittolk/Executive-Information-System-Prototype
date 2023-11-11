--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.5
-- Dumped by pg_dump version 9.6.5

-- Started on 2017-11-13 09:09:30

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12387)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2178 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 194 (class 1259 OID 24892)
-- Name: akun; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE akun (
    id_akun integer NOT NULL,
    username character varying(250) NOT NULL,
    password character varying(250) NOT NULL
);


ALTER TABLE akun OWNER TO postgres;

--
-- TOC entry 193 (class 1259 OID 24890)
-- Name: akun_id_akun_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE akun_id_akun_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE akun_id_akun_seq OWNER TO postgres;

--
-- TOC entry 2179 (class 0 OID 0)
-- Dependencies: 193
-- Name: akun_id_akun_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE akun_id_akun_seq OWNED BY akun.id_akun;


--
-- TOC entry 186 (class 1259 OID 24816)
-- Name: item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE item (
    id_item integer NOT NULL,
    jenis_item character varying(20) NOT NULL,
    nama_item character varying(25) NOT NULL
);


ALTER TABLE item OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 24814)
-- Name: item_id_item_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE item_id_item_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE item_id_item_seq OWNER TO postgres;

--
-- TOC entry 2180 (class 0 OID 0)
-- Dependencies: 185
-- Name: item_id_item_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE item_id_item_seq OWNED BY item.id_item;


--
-- TOC entry 192 (class 1259 OID 24850)
-- Name: penjualan; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE penjualan (
    id_penjualan integer NOT NULL,
    id_waktu integer NOT NULL,
    id_item integer NOT NULL,
    jumlah_terjual integer NOT NULL,
    pendapatan bigint NOT NULL
);


ALTER TABLE penjualan OWNER TO postgres;

--
-- TOC entry 191 (class 1259 OID 24848)
-- Name: penjualan_id_penjualan_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE penjualan_id_penjualan_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE penjualan_id_penjualan_seq OWNER TO postgres;

--
-- TOC entry 2181 (class 0 OID 0)
-- Dependencies: 191
-- Name: penjualan_id_penjualan_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE penjualan_id_penjualan_seq OWNED BY penjualan.id_penjualan;


--
-- TOC entry 190 (class 1259 OID 24832)
-- Name: stok; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE stok (
    id_stok integer NOT NULL,
    id_waktu integer NOT NULL,
    id_item integer NOT NULL,
    jumlah_stok bigint NOT NULL
);


ALTER TABLE stok OWNER TO postgres;

--
-- TOC entry 189 (class 1259 OID 24830)
-- Name: stok_id_stok_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE stok_id_stok_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE stok_id_stok_seq OWNER TO postgres;

--
-- TOC entry 2182 (class 0 OID 0)
-- Dependencies: 189
-- Name: stok_id_stok_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE stok_id_stok_seq OWNED BY stok.id_stok;


--
-- TOC entry 188 (class 1259 OID 24824)
-- Name: waktu; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE waktu (
    id_waktu integer NOT NULL,
    tanggal date NOT NULL,
    hari integer NOT NULL,
    bulan integer NOT NULL,
    tahun integer NOT NULL,
    nama_hari character varying(16) NOT NULL
);


ALTER TABLE waktu OWNER TO postgres;

--
-- TOC entry 187 (class 1259 OID 24822)
-- Name: waktu_id_waktu_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE waktu_id_waktu_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE waktu_id_waktu_seq OWNER TO postgres;

--
-- TOC entry 2183 (class 0 OID 0)
-- Dependencies: 187
-- Name: waktu_id_waktu_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE waktu_id_waktu_seq OWNED BY waktu.id_waktu;


--
-- TOC entry 2030 (class 2604 OID 24895)
-- Name: akun id_akun; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY akun ALTER COLUMN id_akun SET DEFAULT nextval('akun_id_akun_seq'::regclass);


--
-- TOC entry 2026 (class 2604 OID 24819)
-- Name: item id_item; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY item ALTER COLUMN id_item SET DEFAULT nextval('item_id_item_seq'::regclass);


--
-- TOC entry 2029 (class 2604 OID 24853)
-- Name: penjualan id_penjualan; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY penjualan ALTER COLUMN id_penjualan SET DEFAULT nextval('penjualan_id_penjualan_seq'::regclass);


--
-- TOC entry 2028 (class 2604 OID 24835)
-- Name: stok id_stok; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY stok ALTER COLUMN id_stok SET DEFAULT nextval('stok_id_stok_seq'::regclass);


--
-- TOC entry 2027 (class 2604 OID 24827)
-- Name: waktu id_waktu; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY waktu ALTER COLUMN id_waktu SET DEFAULT nextval('waktu_id_waktu_seq'::regclass);


--
-- TOC entry 2171 (class 0 OID 24892)
-- Dependencies: 194
-- Data for Name: akun; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY akun (id_akun, username, password) FROM stdin;
1	admin	admin
\.


--
-- TOC entry 2184 (class 0 OID 0)
-- Dependencies: 193
-- Name: akun_id_akun_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('akun_id_akun_seq', 1, false);


--
-- TOC entry 2163 (class 0 OID 24816)
-- Dependencies: 186
-- Data for Name: item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY item (id_item, jenis_item, nama_item) FROM stdin;
1	produk_utama	Produk1
2	produk_utama	Produk2
3	produk_utama	Produk4
4	produk_utama	Produk3
5	material_utama	material1
6	produk_utama	Produk5
7	material_utama	material3
8	material_utama	material2
9	material_utama	material5
10	material_utama	material4
\.


--
-- TOC entry 2185 (class 0 OID 0)
-- Dependencies: 185
-- Name: item_id_item_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('item_id_item_seq', 10, true);


--
-- TOC entry 2169 (class 0 OID 24850)
-- Dependencies: 192
-- Data for Name: penjualan; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY penjualan (id_penjualan, id_waktu, id_item, jumlah_terjual, pendapatan) FROM stdin;
1	1	1	50	693
3	1	2	15	200
\.


--
-- TOC entry 2186 (class 0 OID 0)
-- Dependencies: 191
-- Name: penjualan_id_penjualan_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('penjualan_id_penjualan_seq', 3, true);


--
-- TOC entry 2167 (class 0 OID 24832)
-- Dependencies: 190
-- Data for Name: stok; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY stok (id_stok, id_waktu, id_item, jumlah_stok) FROM stdin;
1	1	1	30000
\.


--
-- TOC entry 2187 (class 0 OID 0)
-- Dependencies: 189
-- Name: stok_id_stok_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('stok_id_stok_seq', 1, true);


--
-- TOC entry 2165 (class 0 OID 24824)
-- Dependencies: 188
-- Data for Name: waktu; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY waktu (id_waktu, tanggal, hari, bulan, tahun, nama_hari) FROM stdin;
1	2017-02-10	2	10	2017	Senin
\.


--
-- TOC entry 2188 (class 0 OID 0)
-- Dependencies: 187
-- Name: waktu_id_waktu_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('waktu_id_waktu_seq', 1, true);


--
-- TOC entry 2040 (class 2606 OID 24900)
-- Name: akun akun_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY akun
    ADD CONSTRAINT akun_pkey PRIMARY KEY (id_akun);


--
-- TOC entry 2032 (class 2606 OID 24821)
-- Name: item item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id_item);


--
-- TOC entry 2038 (class 2606 OID 24855)
-- Name: penjualan penjualan_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY penjualan
    ADD CONSTRAINT penjualan_pkey PRIMARY KEY (id_penjualan);


--
-- TOC entry 2036 (class 2606 OID 24837)
-- Name: stok stok_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY stok
    ADD CONSTRAINT stok_pkey PRIMARY KEY (id_stok);


--
-- TOC entry 2034 (class 2606 OID 24829)
-- Name: waktu waktu_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY waktu
    ADD CONSTRAINT waktu_pkey PRIMARY KEY (id_waktu);


--
-- TOC entry 2042 (class 2606 OID 24843)
-- Name: stok fk_item; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY stok
    ADD CONSTRAINT fk_item FOREIGN KEY (id_item) REFERENCES item(id_item);


--
-- TOC entry 2044 (class 2606 OID 24861)
-- Name: penjualan fk_item_penjualan; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY penjualan
    ADD CONSTRAINT fk_item_penjualan FOREIGN KEY (id_item) REFERENCES item(id_item);


--
-- TOC entry 2041 (class 2606 OID 24838)
-- Name: stok fk_waktu; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY stok
    ADD CONSTRAINT fk_waktu FOREIGN KEY (id_waktu) REFERENCES waktu(id_waktu);


--
-- TOC entry 2043 (class 2606 OID 24856)
-- Name: penjualan fk_waktu_penjualan; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY penjualan
    ADD CONSTRAINT fk_waktu_penjualan FOREIGN KEY (id_waktu) REFERENCES waktu(id_waktu);


-- Completed on 2017-11-13 09:09:31

--
-- PostgreSQL database dump complete
--

