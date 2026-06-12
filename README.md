<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Projeto Agrinho 2026 - Bernardo Daleves Bonatto | Agricultura Sustentável e Inovadora">
    <title>🌱 Agrinho 2026 | Bernardo Daleves Bonatto</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');

        :root {
            --primary: #2e7d32;
            --secondary: #4caf50;
            --accent: #ff9800;
        }

        body {
            font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(to bottom, #e8f5e9, #f8fdf8);
            color: #1f3a1f;
            line-height: 1.7;
        }

        header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            text-align: center;
            padding: 80px 20px 50px;
            position: relative;
            overflow: hidden;
        }

        header::after {
            content: '🌾';
            position: absolute;
            font-size: 300px;
            opacity: 0.08;
            bottom: -80px;
            right: -60px;
        }

        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 20px;
        }

        h1 {
            font-family: 'Playfair Display', serif;
            font-size: 3.2rem;
            margin-bottom: 12px;
        }

        .hero-image {
            width: 100%;
            max-height: 460px;
            object-fit: cover;
            border-radius: 20px;
            margin: 30px 0;
            box-shadow: 0 15px 30px rgba(0,0,0,0.2);
            transition: transform 0.4s ease;
        }

        .hero-image:hover {
            transform: scale(1.03);
        }

        .badge {
            display: inline-block;
            background: var(--accent);
            color: white;
            padding: 8px 18px;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: 600;
            margin-top: 15px;
            box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);
        }

        .commitment {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 24px;
            margin: 45px 0;
        }

        .card {
            background: white;
            padding: 30px 25px;
            border-radius: 20px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid #e8f5e9;
        }

        .card:hover {
            transform: translateY(-12px);
            box-shadow: 0 15px 35px rgba(46, 125, 50, 0.15);
        }

        .card h3 {
            color: var(--primary);
            margin-bottom: 15px;
            font-size: 1.5rem;
        }

        blockquote {
            background: #e8f5e9;
            border-left: 10px solid var(--secondary);
            padding: 35px 40px;
            font-style: italic;
            font-size: 1.25rem;
            margin: 50px 0;
            border-radius: 0 20px 20px 0;
            box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }

        .quote-author {
            text-align: right;
            margin-top: 15px;
            font-style: normal;
            color: var(--primary);
            font-weight: 600;
        }

        footer {
            background: linear-gradient(135deg, #1b5e20, #2e7d32);
            color: white;
            text-align: center;
            padding: 50px 20px 35px;
            margin-top: 80px;
        }

        .social {
            margin: 20px 0;
        }

        .social a {
            color: white;
            font-size: 1.6rem;
            margin: 0 12px;
            transition: transform 0.3s;
        }

        .social a:hover {
            transform: scale(1.3);
        }
    </style>
</head>
<body>
    <header>
        <h1>🌱 Agrinho 2026</h1>
        <h2>Bernardo Daleves Bonatto</h2>
        <p><strong>O futuro da agricultura sustentável está nas nossas mãos</strong> 🇧🇷</p>
        <span class="badge">Estudante • Futuro Produtor Rural</span>
    </header>

    <div class="container">
        <h2>👋 Olá, eu sou o Bernardo Daleves Bonatto!</h2>
        <p><strong>Estudante apaixonado por tecnologia, inovação e pela agricultura sustentável.</strong></p>
        
        <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449" 
             alt="Jovem plantação de milho verde saudável ao amanhecer" 
             class="hero-image">

        <h2>🌾 Minha Participação no Agrinho 2026</h2>
        <p>Tenho muito orgulho de participar do <strong>Programa Agrinho 2026</strong>, promovido pelo Sistema FAEP/SENAR. Esta iniciativa incentiva os estudantes a refletirem sobre o papel fundamental da agricultura na vida de todos nós, com ênfase em sustentabilidade, inovação e preservação do meio ambiente.</p>

        <h3>🎯 Meu Compromisso com o Agro do Futuro</h3>
        <div class="commitment">
            <div class="card">
                <h3>🌱 Cuidar da Terra</h3>
                <p>Adotar práticas de manejo conservacionista, plantio direto e rotação de culturas para preservar a fertilidade do solo.</p>
            </div>
            <div class="card">
                <h3>🚜 Agricultura 4.0</h3>
                <p>Utilizar drones, sensores, inteligência artificial e agricultura de precisão para aumentar a produtividade de forma responsável.</p>
            </div>
            <div class="card">
                <h3>💧 Economia de Recursos</h3>
                <p>Implementar irrigação eficiente, captação de água da chuva e reuso de água para combater o desperdício.</p>
            </div>
            <div class="card">
                <h3>🌳 Preservação Ambiental</h3>
                <p>Proteger as Áreas de Preservação Permanente (APPs), aumentar o plantio de árvores e promover a biodiversidade.</p>
            </div>
        </div>

        <h2>🚀 Minhas Ideias para um Agro Melhor</h2>
        <ul>
            <li>🌍 Unir o conhecimento tradicional dos produtores com as novas tecnologias</li>
            <li>🤝 Aproximar o campo e a cidade, mostrando a importância do agronegócio brasileiro</li>
            <li>🔬 Incentivar mais investimentos em pesquisa e inovação no setor agro</li>
            <li>📚 Educar e inspirar mais jovens a se apaixonarem pela agricultura sustentável</li>
            <li>♻️ Promover a economia circular e a produção de energia renovável no campo</li>
        </ul>

        <blockquote>
            “A mudança começa com a consciência e a ação de cada um de nós. Hoje eu planto sementes de conhecimento para colher um amanhã melhor e mais sustentável.”
            <div class="quote-author">— Bernardo Daleves Bonatto</div>
        </blockquote>

        <h2>📍 Sobre o Projeto</h2>
        <p>Este projeto foi desenvolvido com muito carinho como parte do <strong>Agrinho 2026</strong>. Meu objetivo é conscientizar sobre a importância da agricultura familiar, da sustentabilidade e do protagonismo dos jovens no futuro do agronegócio brasileiro.</p>
    </div>

    <footer>
        <p><strong>Feito com ❤️ por Bernardo Daleves Bonatto</strong></p>
        <p>Com muito orgulho pela agricultura e pelo futuro do nosso Brasil 🇧🇷</p>
        <p>Agrinho 2026 • Agro forte, futuro sustentável</p>
        
        <div class="social">
            <a href="#" title="Instagram">📷</a>
            <a href="#" title="WhatsApp">💬</a>
        </div>
    </footer>
</body>
</html>
