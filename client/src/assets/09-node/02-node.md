# Módulo 1: Fundamentos do NodeJS e JavaScript Moderno

## Tópico 1.2: Configuração do Ambiente

Para começar a desenvolver com Node.js, é essencial configurar corretamente o ambiente de desenvolvimento. Isso envolve a instalação do Node.js e do seu gerenciador de pacotes padrão, o npm (Node Package Manager), além de entender as alternativas disponíveis.

### Instalando NodeJS e NPM (Node Package Manager)

O Node.js e o npm são distribuídos juntos, o que significa que ao instalar o Node.js, o npm também é instalado automaticamente. Existem várias maneiras de instalar o Node.js, dependendo do seu sistema operacional e das suas preferências.

#### 1. Usando o Instalador Oficial (Recomendado para Iniciantes)

A maneira mais simples e recomendada para a maioria dos usuários é baixar o instalador diretamente do site oficial do Node.js.

*   **Passo 1: Acessar o Site Oficial**
    Vá para [nodejs.org](https://nodejs.org/).

*   **Passo 2: Escolher a Versão**
    Você verá duas opções principais:
    *   **LTS (Long Term Support):** Esta é a versão recomendada para a maioria dos usuários, pois é mais estável e recebe suporte por um período mais longo. Ideal para ambientes de produção.
    *   **Current (Últimos Recursos):** Esta versão contém os recursos mais recentes, mas pode ser menos estável. Recomendada para quem quer experimentar as últimas novidades ou para desenvolvimento não crítico.

    Escolha a versão LTS para este curso.

*   **Passo 3: Baixar e Executar o Instalador**
    Clique no botão da versão LTS para baixar o instalador adequado ao seu sistema operacional (Windows, macOS). Para Linux, o site geralmente fornece instruções para usar o gerenciador de pacotes da sua distribuição.

*   **Passo 4: Seguir as Instruções de Instalação**
    Execute o instalador e siga os passos. Geralmente, você pode aceitar as configurações padrão. O instalador cuidará de adicionar o Node.js e o npm ao seu PATH do sistema, tornando-os acessíveis a partir do terminal.

#### 2. Verificando a Instalação

Após a instalação, abra um novo terminal ou prompt de comando e execute os seguintes comandos para verificar se o Node.js e o npm foram instalados corretamente:

```bash
node -v
npm -v
```

Você deverá ver os números das versões instaladas. Se você receber um erro como "comando não encontrado", pode ser necessário reiniciar o terminal ou verificar se o Node.js foi adicionado corretamente ao seu PATH.

#### 3. Usando Gerenciadores de Versão (Recomendado para Desenvolvedores Experientes)

Para desenvolvedores que trabalham com múltiplos projetos que podem exigir diferentes versões do Node.js, o uso de um gerenciador de versão é altamente recomendado. Isso evita conflitos e facilita a alternância entre versões.

*   **nvm (Node Version Manager):** Popular para sistemas baseados em Unix (macOS, Linux).
    *   **Instalação (exemplo para Linux/macOS):**
        ```bash
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        # Ou via wget
        wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        ```
        Após a instalação, feche e reabra o terminal ou execute `source ~/.bashrc` (ou `~/.zshrc`, `~/.profile`).

    *   **Comandos Básicos do nvm:**
        ```bash
        nvm install <versão>   # Ex: nvm install 18.17.1
        nvm use <versão>      # Ex: nvm use 18.17.1
        nvm alias default <versão> # Define a versão padrão
        nvm ls                # Lista as versões instaladas
        nvm current           # Mostra a versão em uso
        ```

*   **nvs (Node Version Switcher):** Multiplataforma (Windows, macOS, Linux).
    *   **Instalação (exemplo para Windows com PowerShell):**
        ```powershell
        Invoke-WebRequest https://raw.githubusercontent.com/jasongin/nvs/master/install.ps1 -OutFile install.ps1
        .\install.ps1
        ```

    *   **Comandos Básicos do nvs:**
        ```bash
        nvs add <versão>      # Ex: nvs add lts
        nvs use <versão>      # Ex: nvs use lts
        nvs link <versão>     # Define a versão padrão
        nvs ls                # Lista as versões instaladas
        ```

### Visão Geral sobre Gerenciadores de Pacotes (NPM, Yarn, PNPM)

Gerenciadores de pacotes são ferramentas essenciais no ecossistema Node.js. Eles permitem que você instale, gerencie e compartilhe bibliotecas e módulos de código (pacotes) em seus projetos. O npm é o gerenciador padrão, mas Yarn e pnpm surgiram como alternativas com diferentes otimizações.

#### 1. npm (Node Package Manager)

*   **Padrão:** Vem instalado com o Node.js.
*   **Funcionalidades:** Instalação de pacotes, gerenciamento de dependências, execução de scripts, publicação de pacotes.
*   **`package.json`:** Arquivo central que descreve o projeto, suas dependências e scripts.
*   **`node_modules`:** Pasta onde os pacotes instalados são armazenados.
*   **`package-lock.json`:** Garante que as dependências sejam instaladas com as mesmas versões em diferentes ambientes, travando a árvore de dependências.

    **Comandos Comuns:**
    ```bash
    npm init -y          # Inicializa um novo projeto com package.json padrão
    npm install          # Instala todas as dependências listadas em package.json
    npm install <pacote> # Instala um pacote e o adiciona como dependência
    npm install <pacote> --save-dev # Instala como dependência de desenvolvimento
    npm uninstall <pacote> # Desinstala um pacote
    npm update           # Atualiza pacotes
    npm run <script>     # Executa um script definido em package.json
    ```

#### 2. Yarn

*   **Criado pelo Facebook:** Lançado para resolver problemas de performance e segurança do npm na época.
*   **Vantagens (históricas):** Instalações mais rápidas (cache, paralelização), `yarn.lock` para instalações determinísticas.
*   **Compatibilidade:** Usa o mesmo `package.json` do npm.

    **Comandos Comuns (similares ao npm):**
    ```bash
    yarn init -y
    yarn install
    yarn add <pacote>
    yarn add <pacote> --dev
    yarn remove <pacote>
    yarn upgrade
    yarn <script>
    ```

#### 3. pnpm

*   **Foco:** Eficiência de espaço em disco e velocidade.
*   **Como funciona:** Utiliza um armazenamento de conteúdo endereçável para pacotes, criando links simbólicos para `node_modules`. Isso significa que um pacote é armazenado apenas uma vez no sistema, mesmo que seja usado em vários projetos.
*   **Vantagens:** Economia de espaço, instalações mais rápidas, estrutura de `node_modules` mais estrita que ajuda a evitar dependências fantasmas.

    **Comandos Comuns (similares ao npm/yarn):**
    ```bash
    pnpm init -y
    pnpm install
    pnpm add <pacote>
    pnpm add <pacote> --save-dev
    pnpm remove <pacote>
    pnpm update
    pnpm <script>
    ```

### Qual Gerenciador de Pacotes Usar?

Para este curso, o **npm** será o gerenciador de pacotes padrão, pois é universalmente disponível com a instalação do Node.js e suas versões mais recentes (npm v7+) incorporaram muitas das melhorias de performance e segurança que antes eram exclusivas do Yarn e pnpm. No entanto, é bom estar ciente das alternativas e suas vantagens, pois você pode encontrá-las em outros projetos.

### Conclusão

Com o Node.js e o npm instalados e funcionando, você está pronto para começar a escrever e executar seu código JavaScript no servidor. A escolha de um gerenciador de versão como `nvm` ou `nvs` é uma boa prática para gerenciar múltiplos projetos, e entender as diferenças entre npm, Yarn e pnpm o ajudará a navegar no ecossistema Node.js de forma mais eficaz.

---

