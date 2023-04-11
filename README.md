# Team Organizer

App consiste em ajudar na organização de pessoas que se encontram para jogar em turmas. O aplicativo foi projetado com uma navegação em pilha que permiti aos usuários cadastrar ou remover turmas e membros, além de armazenar essas informações localmente no dispositivo, garantindo a persistência dos dados mesmo quando o aplicativo é fechado utilizando async-storage. Além disso, padronização de estilo do App com tema, utilizando a biblioteca Styled Components.

### Falando um pouco mais de cada dependencia e suas responsabilidades: 

- "@expo-google-fonts/roboto": responsável por fornecer a fonte Roboto do Google Fonts para ser utilizada na aplicação.

- "@react-native-async-storage/async-storage": uma biblioteca para armazenamento assíncrono de dados no React Native.

- "@react-navigation/native": uma biblioteca de navegação para React Native, que fornece uma série de funcionalidades para facilitar a navegação entre telas.

- "@react-navigation/native-stack": um tipo de navegação empilhada para React Navigation, que permite gerenciar a navegação entre telas de forma mais fácil.

- "@types/styled-components": um pacote que inclui tipagens para o styled-components.

- "@types/styled-components-react-native": um pacote que inclui tipagens para o styled-components em aplicações React Native.

- "babel-plugin-module-resolver": um plugin para o Babel que permite a criação de apelidos para caminhos de importação.

- "expo": uma plataforma para desenvolvimento de aplicativos móveis multiplataforma baseada em React Native.

- "expo-font": uma biblioteca para carregar e gerenciar fontes personalizadas no Expo.

- "expo-status-bar": um componente que fornece uma barra de status personalizável para aplicativos Expo.

- "phosphor-react-native": uma biblioteca de ícones SVG para React Native.

- "react": a biblioteca principal do React.

- "react-native": a biblioteca principal do React Native.

- "react-native-responsive-fontsize": uma biblioteca para ajustar automaticamente o tamanho da fonte com base no tamanho da tela.

- "react-native-safe-area-context": um componente que fornece informações sobre a área segura da tela para evitar que os elementos sejam cortados em dispositivos com bordas curvas.

- "react-native-screens": uma biblioteca para gerenciamento de telas para React Native.

- "react-native-svg": uma biblioteca para renderização de gráficos vetoriais escaláveis ​​(SVG) no React Native.

- "save-dev": uma ferramenta para garantir a segurança das dependências instaladas.

- "styled-components": uma biblioteca para criação de estilos e componentes reutilizáveis no React e React Native.

### Demonstação do app 
- Criando turmas, e adicionando jogadores e removendo jogadores

![Simulator Screen Recording - iPhone 14 Pro Max - 2023-04-11 at 03 05 10](https://user-images.githubusercontent.com/40840209/231070601-e60f755f-62af-42f3-a1b8-7b99a4382a35.gif)
![Simulator Screen Recording - iPhone 14 Pro Max - 2023-04-11 at 03 07 30](https://user-images.githubusercontent.com/40840209/231070961-447e0408-8b01-40ab-9cf9-adca4cfdf2e8.gif)

- Validação e remoção de jogadores e turmas

![Simulator Screen Recording - iPhone 14 Pro Max - 2023-04-11 at 03 09 18](https://user-images.githubusercontent.com/40840209/231071346-96483066-b40b-45bb-a086-6ba4d87d4f58.gif)


### Rodando o projeto
Para rodar o projeto, siga os seguintes passos:

- Clone o repositório do projeto do GitHub.
- No terminal, navegue até o diretório do projeto e execute o comando **_yarn_** para instalar todas as dependências do projeto.
- Execute o comando **_npx expo start_** para iniciar o servidor de desenvolvimento.
- Instale o aplicativo **_Expo Go_** em um dispositivo móvel Android ou iOS.
- Abra o aplicativo **_Expo Go_** e escaneie o código QR exibido no terminal ou na página aberta pelo comando **_npx expo start_**.
- O aplicativo deverá ser iniciado no dispositivo móvel.

