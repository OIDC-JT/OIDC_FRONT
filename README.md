# OIDC_FRONT

## 1. 레파지토리에 대한 설명
### 이 레파지토리는 제 4회 OIDC에 참가한 "정통" 팀의 "MigHelper"의 FRONT-END 부분으로서 REACT.JS를 기반으로 하고 있다. 
### 제공하는 기능으로는 Migration Helper, Server Create Helper, Server Dashboard, Security Dashboard의 웹 페이지를 구성하고 있으며, 이를 Django 기반의 "NBP_back" 레파지토리와 연동하여 사용한다.

### 2. 웹 페이지 디자인 오픈소스
    https://startbootstrap.com/template/sb-admin
    
![캡쳐1](https://user-images.githubusercontent.com/86856855/181065167-33b9da6e-d084-4ad0-b652-7891844afa2e.jpg)    

### 3. 기능에 따른 컴포넌트 경로
    1. oidc > src > components (웹 페이지 디자인 오픈소스)
    2. oidc > src > components > pages (각 웹 페이지 세부 구성 요소)
    
### 3-1. 웹 페이지 디자인 오픈소스 (oidc > src > components)
    1. style.css : 오픈소스에서 제공하는 웹페이지 css
    2. footer.js
    3. navBar.js
    4. sideMenu.js

### 3-2. 각 웹 페이지 세부 구성 요소 (oidc > src > components > pages) 
    1. Info.js : 본 프로젝트의 메인 화면에 대한 페이지로 팀 설명 및 제공하는 기능 등을 보여주는 페이지
    2. App.css : 세부 구성 요소에 대한 css (oidc > src > components)
    3. BatchInstall.js : 클라이언트가 Server Dashboard에서 서버를 추가할 때, 
    Agent Server에 설치해야하는 Batch 파일을 제공하는 페이지
    4. BatchInstallSecu.js : 클라이언트가 Security Dashboard에서 서버를 추가할 때, 
    Agent Server에 설치해야하는 Batch 파일을 제공하는 페이지
    5. CreateServer.js : 클라이언트가 입력한 조건을 백엔드 서버에 전달하고 
    백엔드 서버의 웹 크롤링 결과를 전달 받아 가장 적당한 서버 환경을 제시하는 페이지
    6. Dashboard.js : 클라이언트가 로그인하지 않았을 경우에는 로그인을 요청하는 텍스트와 
    로그인, 회원가입 버튼을 보여주고, 이미 로그인한 경우에는 LoginPage.js로 연결해주는 페이지
    7. LoginPage.js : 클라이언트가 로그인하지 않았을 경우에는 로그인 페이지를 렌더링하고,
    이미 로그인한 경우에는 Server Dashboard를 렌더링해주는 페이지
    8. LoginPageSecu.js : 클라이언트가 로그인하지 않았을 경우에는 로그인 페이지를 렌더링하고,
    이미 로그인한 경우에는 Security Dashboard를 렌더링해주는 페이지
    9. MigHelper.js : 클라이언트가 자신의 VM 혹은 on-promise에 대해 입력한 정보를 바탕으로, 
    Cloud로 Migration할 때, 입력한 조건을 백엔드 서버에 전달하고 백엔드 서버의 웹 크롤링 결과를 전달 받아 
    가장 적당한 서버 환경을 제시하는 페이지 
    10. Security.js : 클라이언트가 로그인하지 않았을 경우에는 로그인을 요청하는 텍스트와 
    로그인, 회원가입 버튼을 보여주고, 이미 로그인한 경우에는 LoginPageSecu.js로 연결해주는 페이지
    11. ServerAdd.js : 클라이언트가 모니터링하고자 하는 Agent Server의 간단한 정보를 입력받아,
    백엔드 서버로 전송하고 BatchInstall.js로 연결해주는 페이지
    12. ServerAddSecu.js : 클라이언트가 보안 거버넌스를 제공받고자 하는 Server의 간단한 정보를 입력받아,
    백엔드 서버로 전송하고 BatchInstall.js로 연결해주는 페이지
    13. SignUp.js : 클라이언트가 Server Dashboard, Security Dashboard를 사용하기 위한 회원가입 기능을 제공하는 페이지
    
