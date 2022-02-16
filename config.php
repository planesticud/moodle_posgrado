<?php
require 'lib/aws.phar';
use Aws\SecretsManager\SecretsManagerClient;
use Aws\Exception\AwsException;
use Aws\Iam\IamClient;

$client = new SecretsManagerClient([
    'version' => '2017-10-17',
    'region' => 'us-east-1',
]);

$secretName = 'arn:aws:secretsmanager:us-east-1:561162581195:secret:MoodlePosgradoProd-zl3KCC';

try {
    $result = $client->getSecretValue([
        'SecretId' => $secretName,
    ]);

} catch (AwsException $e) {
    $error = $e->getAwsErrorCode();
}
// Decrypts secret using the associated KMS CMK.
// Depending on whether the secret is a string or binary, one of these fields will be populated.
if (isset($result['SecretString'])) {
    $secret = $result['SecretString'];
}

unset($CFG);
global $CFG;
$CFG = new stdClass();

$CFG->dbtype    = 'mysqli';
$CFG->dblibrary = 'native';
$CFG->dbhost = 'aulasvirtuales.cwkcjtiatchy.us-east-1.rds.amazonaws.com';
$CFG->dbname = 'moodle_posgrado';
$CFG->dbuser = json_decode($secret)->{'username'};
$CFG->dbpass = json_decode($secret)->{'password'};
$CFG->prefix = 'mdl_';
$CFG->dboptions = array (
  'dbpersist' => 0,
  'dbport' => 3306,
  'dbsocket' => '',
  'dbcollation' => 'utf8mb4_general_ci',
);

$CFG->lang = 'en';

// Hostname definition //
$hostname = 'posgradoaulas.udistrital.edu.co';
if ($hostname == '') {
  $hostwithprotocol = 'https://ProdA-Publi-VN7YH5EXESTA-2080190725.us-east-1.elb.amazonaws.com';
}
else {
  $hostwithprotocol = 'https://' . strtolower($hostname);
}

$CFG->wwwroot = strtolower($hostwithprotocol);
$CFG->sslproxy = (substr($hostwithprotocol,0,5)=='https' ? true : false);
// Moodledata location //
$CFG->dirroot = '/var/www/moodle/html';
$CFG->dataroot = '/var/www/moodle/data';
$CFG->tempdir = '/var/www/moodle/temp';
$CFG->cachedir = '/var/www/moodle/cache';
$CFG->localcachedir = '/var/www/moodle/local';
$CFG->directorypermissions = 0777;
$CFG->admin = 'admin';

// Configure Session Cache
$SessionEndpoint = 'sesioncacheposgrado.8uremz.cfg.use1.cache.amazonaws.com:11211';
if ($SessionEndpoint != '') {
  $CFG->dbsessions = false;
  $CFG->session_handler_class = '\core\session\memcached';
  $CFG->session_memcached_save_path = $SessionEndpoint;
  $CFG->session_memcached_prefix = 'memc.sess.key.';
  $CFG->session_memcached_acquire_lock_timeout = 120;
  $CFG->session_memcached_lock_expire = 7100;
  $CFG->session_memcached_lock_retry_sleep = 150;
}

//$CFG->tool_generator_users_password = 'jmetermoodle'; // NOT FOR PRODUCTION SERVERS!

//@error_reporting(E_ALL | E_STRICT);   // NOT FOR PRODUCTION SERVERS!
//@ini_set('display_errors', '1');         // NOT FOR PRODUCTION SERVERS!
//$CFG->debug = (E_ALL | E_STRICT);   // === DEBUG_DEVELOPER - NOT FOR PRODUCTION SERVERS!
//$CFG->debugdisplay = 1;
require_once(__DIR__ . '/lib/setup.php');
// END OF CONFIG //
?>
