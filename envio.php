<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Configurar o e-mail
    $destinatario = 'lmmaciel@toyota.com.br';
    $assunto = 'Aviso: Formulário preenchido';

    // Mensagem do aviso
    $mensagem = 'O formulário foi preenchido.';

    // Enviar o e-mail
    $envio = mail($destinatario, $assunto, $mensagem);

    // Verificar se o e-mail foi enviado com sucesso
    if ($envio) {
        echo "Aviso enviado com sucesso!";
    } else {
        echo "Ocorreu um erro ao enviar o aviso.";
    }

    // Redirecionar o usuário de volta para o formulário
    header('Location: formulario.html');
    exit();
}
?>
