# Módulo 5: Deploy e Ecossistema

## Tópico 5.3: CI/CD (Integração e Entrega Contínua)

CI/CD, que significa Integração Contínua (Continuous Integration) e Entrega Contínua (Continuous Delivery) ou Implantação Contínua (Continuous Deployment), é um conjunto de práticas que automatizam o ciclo de vida de desenvolvimento de software. O objetivo principal é tornar o processo de construção, teste e deploy de aplicações mais rápido, confiável e menos propenso a erros. Para aplicações Node.js, a implementação de um pipeline CI/CD é fundamental para manter a agilidade e a qualidade do código.

### O que é CI/CD?

#### Integração Contínua (CI)

Integração Contínua é a prática de desenvolvedores integrarem suas alterações de código em um repositório central (como Git) com frequência, geralmente várias vezes ao dia. Cada integração é então verificada por uma construção automatizada (build) e testes automatizados para detectar erros de integração o mais rápido possível.

**Benefícios da CI:**
*   **Detecção Rápida de Bugs:** Problemas de integração são identificados e corrigidos cedo, reduzindo o custo e o esforço.
*   **Qualidade do Código:** Garante que o código base esteja sempre em um estado funcional e testado.
*   **Colaboração Aprimorada:** Facilita a colaboração entre desenvolvedores, pois as integrações são pequenas e frequentes.
*   **Feedback Rápido:** Desenvolvedores recebem feedback imediato sobre a qualidade e funcionalidade de suas alterações.

**Etapas Típicas de um Pipeline de CI:**
1.  **Commit de Código:** Desenvolvedores fazem commit de suas alterações para o repositório.
2.  **Gatilho (Trigger):** O sistema de CI detecta o novo commit e inicia o pipeline.
3.  **Build:** O código é compilado (se necessário) e as dependências são instaladas.
4.  **Testes:** Testes unitários, de integração e de segurança são executados.
5.  **Relatório:** Os resultados dos testes são reportados. Se houver falhas, o build é marcado como falho e os desenvolvedores são notificados.

#### Entrega Contínua (CD - Continuous Delivery)

Entrega Contínua é uma extensão da Integração Contínua. Após a fase de CI, onde o código é construído e testado, a Entrega Contínua garante que o código esteja sempre em um estado implantável (deployable). Isso significa que, a qualquer momento, o código pode ser liberado para produção com um clique, mas a decisão de implantar é manual.

**Benefícios da Continuous Delivery:**
*   **Prontidão para Deploy:** A aplicação está sempre pronta para ser implantada em produção.
*   **Menos Riscos no Deploy:** Como os deploys são pequenos e frequentes, o risco de introduzir bugs é reduzido.
*   **Feedback de Negócios:** Permite que as partes interessadas de negócios testem as novas funcionalidades mais cedo.

#### Implantação Contínua (CD - Continuous Deployment)

Implantação Contínua vai um passo além da Entrega Contínua. Cada alteração de código que passa com sucesso por todas as etapas do pipeline de CI/CD é automaticamente implantada em produção, sem intervenção humana. Isso requer um alto nível de confiança nos testes automatizados e na infraestrutura.

**Benefícios da Continuous Deployment:**
*   **Lançamentos Rápidos:** Novas funcionalidades e correções de bugs chegam aos usuários finais muito mais rapidamente.
*   **Redução de Overhead:** Elimina a necessidade de agendar e gerenciar deploys manuais.
*   **Ciclo de Feedback Curto:** Permite aprender rapidamente com o uso real da aplicação.

### Automatizando Testes e o Processo de Deploy com GitHub Actions

GitHub Actions é uma plataforma de CI/CD que permite automatizar, personalizar e executar fluxos de trabalho de desenvolvimento de software diretamente no seu repositório GitHub. Você pode criar fluxos de trabalho (workflows) que constroem, testam e implantam seu código em qualquer plataforma.

#### Conceitos Chave do GitHub Actions:

*   **Workflow:** Um processo automatizado configurado em um arquivo YAML (`.github/workflows/main.yml`).
*   **Event:** Um evento específico que dispara o workflow (ex: `push` para o branch `main`, `pull_request`).
*   **Job:** Um conjunto de passos que são executados em um runner. Um workflow pode ter um ou mais jobs, que podem ser executados em paralelo ou sequencialmente.
*   **Step:** Uma tarefa individual dentro de um job. Pode ser um comando shell ou uma ação (action).
*   **Action:** Uma aplicação customizada que executa uma tarefa complexa, como configurar um ambiente Node.js, fazer login em um provedor de nuvem ou implantar código.
*   **Runner:** Um servidor que executa o workflow. Pode ser hospedado pelo GitHub ou auto-hospedado.

#### Exemplo de Workflow CI/CD para uma Aplicação Node.js

Vamos criar um workflow que:
1.  Dispara em `push` e `pull_request` para o branch `main`.
2.  Instala as dependências do Node.js.
3.  Executa os testes.
4.  Constrói a aplicação (se houver um passo de build, como para TypeScript).
5.  Implanta a aplicação em um provedor de nuvem (ex: Heroku, Vercel, AWS).

Crie um arquivo `.github/workflows/main.yml` na raiz do seu projeto:

```yaml
# .github/workflows/main.yml

name: Node.js CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout do Código
      uses: actions/checkout@v4

    - name: Configurar Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm' # Habilita cache para npm install

    - name: Instalar Dependências
      run: npm install

    - name: Executar Testes
      run: npm test

    - name: Construir Aplicação (se TypeScript ou outro build)
      run: npm run build # Se você tiver um script 'build' no package.json
      if: always() # Executa mesmo se os testes falharem, para ver o log do build

  deploy:
    needs: build-and-test # Este job só roda se 'build-and-test' for bem-sucedido
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' # Só faz deploy se for um push para o branch main

    steps:
    - name: Checkout do Código
      uses: actions/checkout@v4

    - name: Configurar Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'

    - name: Instalar Dependências
      run: npm install

    - name: Construir Aplicação
      run: npm run build

    # Exemplo de Deploy para Heroku
    - name: Deploy para Heroku
      uses: akhileshns/heroku-deploy@v3.12.12
      with:
        heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
        heroku_app_name: "nome-da-sua-app-heroku"
        heroku_email: "seu-email@example.com"
        # branch: "main" # Opcional, padrão é o branch atual

    # Exemplo de Deploy para Vercel (requer Vercel CLI e projeto configurado)
    # - name: Deploy para Vercel
    #   run: vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
    #   env:
    #     VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
    #     VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

    # Exemplo de Deploy para AWS S3 (para assets estáticos ou frontends)
    # - name: Deploy para AWS S3
    #   uses: jakejarvis/s3-sync-action@master
    #   with:
    #     args: --acl public-read --delete
    #   env:
    #     AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
    #     AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
    #     AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    #     AWS_REGION: 'us-east-1'
    #     SOURCE_DIR: 'dist' # Onde seus arquivos de build estão
```

#### Configurando Segredos (Secrets)

Para o deploy, você precisará de chaves de API ou tokens que não devem ser expostos publicamente. O GitHub Actions permite armazenar esses valores como "Secrets" no seu repositório.

1.  No seu repositório GitHub, vá para `Settings > Secrets and variables > Actions`.
2.  Clique em `New repository secret`.
3.  Adicione o nome do segredo (ex: `HEROKU_API_KEY`, `VERCEL_TOKEN`, `AWS_ACCESS_KEY_ID`) e seu valor.

Esses segredos serão injetados no ambiente de execução do seu workflow, mas não serão visíveis nos logs.

### Conclusão

CI/CD é uma prática essencial para o desenvolvimento de software moderno, especialmente em projetos Node.js. Ao automatizar a construção, teste e deploy, você pode acelerar o ciclo de desenvolvimento, melhorar a qualidade do código e reduzir o risco de erros em produção. Ferramentas como GitHub Actions fornecem uma plataforma poderosa e flexível para implementar pipelines CI/CD robustos, permitindo que você entregue valor aos seus usuários de forma contínua e confiável.

---

