<?php
// api/config.php

// Configurações do banco de dados
define('DB_HOST', 'localhost');
define('DB_NAME', 'u871558276_techlearn_db');
define('DB_USER', 'u871558276_deploySite');
define('DB_PASS', 'deploySite01#');
define('DB_CHARSET', 'utf8mb4');

// Classe para gerenciar conexão com banco
class Database {
    private static $instance = null;
    private $pdo;

    private function __construct() {
        try {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
            
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];
            
            $this->pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
            
        } catch(PDOException $e) {
            error_log("Erro na conexão: " . $e->getMessage());
            throw new Exception("Erro ao conectar ao banco de dados");
        }
    }

    // Singleton - garante apenas uma instância
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    // Retorna a conexão PDO
    public function getConnection() {
        return $this->pdo;
    }

    // Previne clonagem
    private function __clone() {}

    // Previne deserialização
    public function __wakeup() {
        throw new Exception("Não é possível deserializar singleton");
    }
}
?>