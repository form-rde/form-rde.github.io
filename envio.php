<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    // Configurar o e-mail
    $destinatario = 'lmmaciel@toyota.com.br';
    $assunto = 'Mensagem do formulário de contato';
    $headers = "From: server";

    // Enviar o e-mail
    mail($destinatario, $assunto, $headers);

    // Redirecionar o usuário de volta para o formulário
    header('Location: formulario.html');
    exit();
}
?>
