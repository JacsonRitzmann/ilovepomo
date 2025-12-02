<?php
// api/formulario.php - Formulário de contato/ajuda

// Importar configurações do banco (se necessário)
//require_once '../config/config.php';

// Configurações de CORS (permitir requisições do frontend)
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Se for requisição OPTIONS (preflight), retorna 200
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Apenas aceitar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['erro' => 'Método não permitido']);
    exit();
}

// Pegar dados do POST
$dados = json_decode(file_get_contents('php://input'), true);

// Validar dados obrigatórios
$camposObrigatorios = ['nome', 'email', 'plano', 'mensagem'];

foreach ($camposObrigatorios as $campo) {
    if (empty($dados[$campo])) {
        http_response_code(400);
        echo json_encode(['erro' => "Campo '$campo' é obrigatório"]);
        exit();
    }
}

// Validar email
if (!filter_var($dados['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['erro' => 'Email inválido']);
    exit();
}

// Sanitizar dados
$nome = htmlspecialchars(strip_tags($dados['nome']));
$email = htmlspecialchars(strip_tags($dados['email']));
$plano = htmlspecialchars(strip_tags($dados['plano']));
$mensagem = htmlspecialchars(strip_tags($dados['mensagem']));

try {
    // Enviar email (configurar smtp conforme necessário)
    $destinatario = 'contato@ilovepomo.com.br'; // Altere para seu email
    $assunto = "Nova mensagem de contato - Plano: {$plano}";
    $corpo = "Nome: {$nome}\n";
    $corpo .= "Email: {$email}\n";
    $corpo .= "Plano: {$plano}\n\n";
    $corpo .= "Mensagem:\n{$mensagem}";
    
    $headers = "From: {$email}\r\n";
    $headers .= "Reply-To: {$email}\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Descomentar para enviar email real
    $emailEnviado = mail($destinatario, $assunto, $corpo, $headers);
    
    // Salvar no banco (opcional - descomentar se tiver tabela)

    // $db = Database::getInstance();
    // $pdo = $db->getConnection();
    
    // $sql = "INSERT INTO mensagens_contato (nome, email, plano, mensagem, data_cadastro) 
    //         VALUES (:nome, :email, :plano, :mensagem, NOW())";
    
    // $stmt = $pdo->prepare($sql);
    // $stmt->execute([
    //     ':nome' => $nome,
    //     ':email' => $email,
    //     ':plano' => $plano,
    //     ':mensagem' => $mensagem
    // ]);
 
    
    // Resposta de sucesso
    http_response_code(200);
    echo json_encode([
        'sucesso' => true,
        'mensagem' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    ]);
    
} catch(Exception $e) {
    http_response_code(500);
    echo json_encode([
        'erro' => 'Erro ao enviar mensagem',
        'detalhes' => $e->getMessage()
    ]);
}
