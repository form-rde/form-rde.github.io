<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    // Configurar o e-mail
    $destinatario = 'lmmaciel@toyota.com.br';
    $assunto = 'Mensagem do formulário de contato';

    // Enviar o e-mail
    mail($destinatario, $assunto);
    exit();
}
?>
