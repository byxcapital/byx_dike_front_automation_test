# Projeto de Testes Automatizados para Sistema de Conciliação CAAS - Squad Zeus

Este é um projeto de testes automatizados desenvolvido com Cypress para testar o front-end do sistema de conciliação que o time da Zeus está desenvolvendo. A estrutura do projeto foi organizada para seguir boas práticas de automação, incluindo geração automática de relatórios HTML, integração com GitHub Actions e uso do Cypress Dashboard para visualização das evidências de teste online e de qualquer lugar.

## Pré-requisitos

- Node.js e npm instalados no seu sistema.
- Acesso a um repositório no GitHub com Actions habilitadas.

## Configurações

Este projeto utiliza Cypress com as seguintes configurações:

- `cypress.json`: Arquivo de configuração principal do Cypress, que inclui configurações como a URL base da aplicação, ambiente, configurações de relatório, entre outros.
- `.github/workflows/cypress.yml`: Configuração das GitHub Actions para executar os testes Cypress automaticamente quando ocorrerem pushs no repositório.


## Estrutura do Projeto

├── cypress

│ ├── e2e/

│ │ └── gui/ # Arquivos de testes de interface gráfica

│ ├── support/

│ │ └── commands.js # Comandos personalizados do Cypress

├── .github/

│ └── workflows/

│ └── cypress.yml # Configuração das GitHub Actions para testes automatizados

├── cypress.json # Arquivo de configuração principal do Cypress

├── .gitignore # Arquivo de configuração do Git para ignorar arquivos não necessários

└── package.json # Arquivo de configuração do Node.js com as dependências e scripts


## Instalação

1. Clone este repositório:
```bash
git clone https://github.com/carlosmoreirabyx/byx_dike_front_automation_test    
```
2. Navegue até o diretório do projeto:
```bash
cd byx_dike_front_automation_test
```
3. Instale as dependências do projeto:
```bash
npm install
```

## Executando os Testes

Para executar os testes Cypress localmente, você pode usar o comando:

```bash
npx cypress run
```

Isso executará os testes em modo headless no navegador padrão definido nas configurações do Cypress.

## Visualizando Relatórios

Os relatórios HTML serão gerados automaticamente após a execução dos testes e estarão disponíveis na pasta `cypress/reports/html`. Eles podem ser visualizados abrindo o arquivo `index.html` em um navegador da web.

## Cypress Dashboard

Este projeto conta com a configuração de um Dashboard para melhor visualização dos testes que foram executados na esteira. Ao entrar em cada execução da esteira é possível ver ao fim da página um link para o Dashboard. 

## Autor

#### Carlos Moreira - Squad Zeus

Qualquer dúvida, entre em contato comigo via Slack ou Teams BYX. 

Ficarei feliz em ajudar.
