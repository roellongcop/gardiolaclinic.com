<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

include_once 'barcode_generator/src/BarcodeGenerator.php';  
include_once 'barcode_generator/src/BarcodeGeneratorHTML.php'; 
include_once 'barcode_generator/src/BarcodeGeneratorPNG.php'; 

class Barcode
{
	public function generate_html($serial)
	{
		$generator = new Picqer\Barcode\BarcodeGeneratorHTML();
		return $generator->getBarcode($serial, $generator::TYPE_CODE_128);
	}

	public function generate_png($serial)
	{
		$generator = new \Picqer\Barcode\BarcodeGeneratorPNG();
		return '<img src="data:image/png;base64,' . base64_encode($generator->getBarcode($serial, $generator::TYPE_CODE_128)) . '">';
	}
}
