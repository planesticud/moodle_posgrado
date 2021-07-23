<?php  // Moodle configuration file

unset($CFG);
global $CFG;
$CFG = new stdClass();

$CFG->dbtype    = 'mariadb';
$CFG->dblibrary = 'native';
$CFG->dbhost    = 'mysql.cwkcjtiatchy.us-east-1.rds.amazonaws.com';
$CFG->dbname    = 'moodle_posgrado';
$CFG->dbuser    = 'posgrado';
$CFG->dbpass    = '!!p0sgr4d0s**';
$CFG->prefix    = 'mdl_';
$CFG->dboptions = array (
  'dbpersist' => 0,
  'dbport' => '3306',
  'dbsocket' => '',
  'dbcollation' => 'utf8mb4_general_ci',
);

$CFG->wwwroot   = 'https://posgradoaulas.udistrital.edu.co';
//$CFG->wwwroot   = 'http://3.237.3.47';
$CFG->dataroot  = '/var/www/html/moodledata';
$CFG->admin     = 'admin';
$CFG->tempdir = '/var/www/temp';
$CFG->dirroot = '/var/www/moodle';
$CFG->cachedir = '/var/www/cache1';

$CFG->directorypermissions = 0777;


require_once(__DIR__ . '/lib/setup.php');

// There is no php closing tag in this file,
// it is intentional because it prevents trailing whitespace problems!
