<h1>익명으로 고민을 나누는 채팅 커뮤니티 서비스 - 오픈마인드</h1>

### 🕰️ 개발 기간

📅 25.03.06 - 25.03.21

### 💫 팀원 소개

| 이나경 👩🏻‍💻 | 이현석 👨‍💻 | 정지원 👩‍💻 | 차경훈 👨‍💻 | 홍승원 👨‍💻 |
|:---:|:---:|:---:|:---:|:---:|
| <a href="https://github.com/lee-nakyung"><img src="https://github.com/lee-nakyung.png" width="80"></a> | <a href="https://github.com/leeunduck"><img src="https://github.com/leeunduck.png" width="80"></a> | <a href="https://github.com/Jiwon42"><img src="https://github.com/Jiwon42.png" width="80"></a> | <a href="https://github.com/maclovedany"><img src="https://github.com/maclovedany.png" width="80"></a> | <a href="https://github.com/seungwonHong"><img src="https://github.com/seungwonHong.png" width="80"></a> |

---

## 💼 팀원 역할

### 이나경 👩🏻‍💻
- **메인 페이지 (/) 구현**
  - 반응형 레이아웃을 구성하고, 사용자 경험을 고려한 인터페이스 구현
  - 질문받기 버튼 클릭 시 피드 생성 API와 연결하고, 응답 데이터를 처리하는 로직 구현
  - API 응답으로 받은 id와 name을 로컬 스토리지에 저장하여 세션 유지 및 사용자 식별 기능 추가
  - 피드 생성 후 반환된 id 값을 활용하여 /post/{id}/answer 경로로 동적 이동하는 기능 구현
- **개별 피드 (질문이 없을 때) 페이지 (/post/{id}) 구현**
  - 질문이 존재하지 않을 경우의 상태를 고려하여 적절한 UI/UX 설계 및 개발
  - "링크 공유하기" 버튼 클릭 시 성공적으로 복사되었음을 알리는 토스트 팝업 UI 구현

### 이현석 👨‍💻
- **질문목록 페이지 (/list) 구현**
  - 반응형 디자인 구성 및 최신순 정렬 기능 추가
  - 로고 클릭 시 메인 페이지로 이동
- **기능 개발**
  - API 응답으로 받은 id와 name을 로컬 스토리지에 저장하여 세션 유지 및 사용자 식별 기능 추가
  - 로컬스토리지를 확인하여 값이 없을 경우 경고창을 띄우고, 값이 있을 경우 해당 값을 표시하며, 클릭하면 동적으로 /post/{id}/answer 경로로 이동하는 기능 구현
  - API 서버에서 데이터를 받아와 카드 프로필을 동적으로 생성하고, 각 카드 프로필을 클릭하면 /post/{id} 경로로 동적 이동하는 기능 구현
  - 카드 목록을 최신순과 이름순으로 정렬할 수 있도록 구현하였으며, 기본적으로 최신순으로 정렬됨
  - 5개의 페이지 번호를 표시하며,. 오른쪽 화살표(▶) 클릭 시 다음 페이지로 이동하고, 마지막 번호에서 클릭하면 번호가 오른쪽으로 이동. 왼쪽 화살표(◀) 클릭 시 이전 페이지로 이동하며, 첫 번호에서 클릭하면 번호가 왼쪽으로 이동.

### 정지원 👩‍💻
- **Global 스타일 설정**
  - 프로젝트 전반의 일관된 UI/UX 경험을 위해 Global Style을 정의 및 적용
- **개별 피드 질문하기 모달창 구현 (/post/{id})**
  - 모달창 퍼블리싱 (재사용성을 고려한 TextForm 컴포넌트 개발)
  - 모달창 상태 관리 (X 버튼 및 외부 클릭 시 닫기)
  - 입력 여부에 따른 UI 변경 (질문 입력 시 "질문 보내기" 버튼 활성화, 미입력 시 비활성화)
  - API 연동 및 데이터 처리 (질문 생성 API 호출 및 응답 처리, 에러 핸들링 및 사용자 피드백 제공)
  - 반응형 UI 적용 (PC, Tablet, Mobile 환경 대응, CSS Media Query 및 Styled-components 활용)

### 차경훈 👨‍💻
- **답변완료 페이지 (/post/{id}/answer) 구현**
  - 답변 입력 및 "답변 완료" 버튼 활성화 기능 
  - 작성된 답변 “수정하기” 버튼 클릭 시 수정 가능
  - 수정 내용이 없을 경우 “수정 완료” 버튼 비활성화
  - “삭제하기” 버튼 클릭 시 받은 질문 및 피드 일괄 삭제

### 홍승원 👨‍💻
- **개별 피드 페이지 (/post/{id}) 구현**
  - API 연동 (사용자 정보, 질문, 답변 불러오기)
  - 아이콘 컴포넌트 분리 및 공유 기능 구현
  - 질문, 답변 렌더링 및 좋아요/싫어요 기능 구현
  - 질문 작성하기 버튼 퍼블리싱

---

## 🚀 기술 스택

### 🛠 Tools
<p align="center">
  <img src="https://img.shields.io/badge/visualStudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/vite-646cff?style=for-the-badge&logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-f05032?style=for-the-badge&logo=git&logoColor=white">
</p>

### ⚙️ Config
<p align="center">
  <img src="https://img.shields.io/badge/prettier-f7b93e?style=for-the-badge&logo=prettier&logoColor=white">
  <img src="https://img.shields.io/badge/eslint-4b32c3?style=for-the-badge&logo=eslint&logoColor=white">
</p>

### 💻 Development
<p align="center">
  <img src="https://img.shields.io/badge/html5-e34f26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css3-1572b6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/react-61dafb?style=for-the-badge&logo=react&logoColor=black">
</p>

### 📢 Communication
<p align="center">
  <img src="https://img.shields.io/badge/kakaotalk-ffe812?style=for-the-badge&logo=kakaotalk&logoColor=black">
  <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/discord-5865f2?style=for-the-badge&logo=discord&logoColor=white">
</p>

---

<!-- Getting Started -->
## 	:toolbox: Getting Started

```
$ git clone https://github.com/FE14-part2-team5-OpenMind/OpenMind_Team5.git

$ npm install

$ npm run dev
```


## 🖼️ Screenshots

### ✨ 메인페이지
<div align="center">
  <img width="1465" src="https://github.com/user-attachments/assets/ec0615d4-41c0-4386-84fa-6f37bdd600ab">
</div>

### ✨ 질문목록(List) 페이지
<div align="center">
  <img width="1469" src="https://github.com/user-attachments/assets/bd482f62-2da0-423f-8fc4-4d43c7ed43c9">
</div>

### ✨ 개별피드(Post) 페이지
<div align="center">
  <img width="1469" src="https://github.com/user-attachments/assets/4f00abdb-39a0-43c7-9b35-758faf972853">
</div>

### ✨ 질문 모달창
<div align="center">
  <img width="1469" src="https://github.com/user-attachments/assets/a30e0b93-aea9-49cf-9ac8-97a6b8041984">
</div>

### ✨ 답변완료(Answer) 페이지
<div align="center">
  <img width="1469" src="https://github.com/user-attachments/assets/5dc57d90-e583-48c7-bdf6-5b13f25314a4">
</div>


<!-- 기획요구사항 

## 기획 요구 사항

### 1. 메인 페이지(`/`) <a href="https://github.com/Nahyunfirstorganization/OpenMind_Team2/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C1(%EB%A9%94%EC%9D%B8-%ED%8E%98%EC%9D%B4%EC%A7%80)" >상세보기 - WIKI 이동</a>

<details><summary>요구사항 보기</summary>

- 이름을 입력하고 '질문 받기' 버튼을 클릭하면 피드 생성 요청으로 피드를 생성합니다.
- 피드 생성 응답을 받으면 응답으로 받은 피드 id를 활용해 `/post/{id}/answer` 페이지로 이동합니다.
</details>

### 2. 질문 목록 페이지(`/list`) <a href="https://github.com/Nahyunfirstorganization/OpenMind_Team2/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C2(%EC%A7%88%EB%AC%B8-%EB%AA%A9%EB%A1%9D-%ED%8E%98%EC%9D%B4%EC%A7%80)" >상세보기 - WIKI 이동</a>

<details><summary>요구사항 보기</summary>

- 오픈마인드 로고를 클릭하면 `/` 페이지로 이동합니다.
- 현재 페이지, 정렬 순서를 설정해서 카드 리스트 조회 요청합니다.(기본 정렬 순서는 '최신순')
- '답변하러 가기' 버튼을 클릭 시, 질문 받기로 생성한 id가 로컬 스토리지에 없으면 메인 페이지(`/`)로 이동하고, 있으면 `/post/{id}/answer` 페이지로 이동합니다.
- PC에서 너비가 1200px 보다 커질 경우 내부 내용의 위치는 고정하고 좌우 여백만 커집니다.
- PC에서 카드 컴포넌트의 너비는 220px 입니다.
- Tablet에서 상단 네비게이션 영역의 좌우 여백은 50px을 유지해주세요.
- Tablet에서 카드 리스트 영역의 좌우 최소 여백은 32px 입니다.
- Tablet에서 카드 컴포넌트의 최소 너비는 186px 입니다.
- Tablet에서 카드 리스트 영역이 줄어드는 것에 따라 카드 크기가 작아지다가 186px보다 작아질 때 하나의 행에 4개 → 3개씩 보이도록 합니다.
- Mobile에서 '누구에게 질문할까요?'는 좌측 여백 24px과 정렬 드롭 다운은 우측 여백 24px을
  유지하며 둘 사이의 간격이 멀어집니다.
- Mobile에서 카드 리스트 영역의 좌우 최소 여백은 24px 입니다.
</details>

### 3. 개별 피드( `/post/{id}`) <a href="https://github.com/Nahyunfirstorganization/OpenMind_Team2/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C3(%EA%B0%9C%EB%B3%84-%ED%94%BC%EB%93%9C)" >상세보기 - WIKI 이동</a>

<details><summary>요구사항 보기</summary>

- 답변이 완료된 질문은 '답변완료'로 표시해주세요.
- 답변이 완료된 질문에는 '수정하기'와 '삭제하기' 버튼이 생깁니다.
- 답변이 완료되지 않은 질문은 '미답변'으로 표시해주세요.
- 답변거절 버튼을 누르면 ‘답변거절’로 입력이 됩니다
- 질문이 없는 경우 'No_question 화면'이 보입니다.('아직 질문이 없습니다' 텍스트 보여주기)
- '질문 작성하기' 버튼을 클릭하면 '질문을 작성하세요' 모달이 뜹니다.
- 질문은 '최신순'으로 무한 스크롤 방식으로 배치합니다.
- '…'을 누르면 삭제하기 버튼이 나타나고 누르면 해당 질문이 삭제됩니다.
- '링크 아이콘'을 클릭하면 URL을 클립보드에 복사하고, 'URL이 복사되었습니다' 토스트가 5초 동안 보이다가 사라집니다.
- '카카오 아이콘'을 클릭하면 카카오톡으로 공유하는 화면이 보입니다.
- '페이스북 아이콘'을 클릭하면 페이스북으로 공유하는 화면이 보입니다.
- 좋아요, 싫어요 개수를 표시합니다.
</details>

### 4. 개별 피드에 대한 질문하기 모달창( `/post/{id}`) <a href="https://github.com/Nahyunfirstorganization/OpenMind_Team2/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C4(%EA%B0%9C%EB%B3%84-%ED%94%BC%EB%93%9C%EC%97%90-%EB%8C%80%ED%95%9C-%EC%A7%88%EB%AC%B8%ED%95%98%EA%B8%B0-%EB%AA%A8%EB%8B%AC%EC%B0%BD)" >상세보기 - WIKI 이동</a>

<details><summary>요구사항 보기</summary>
- 모달의 'X' 버튼이나 모달 내용을 벗어난 부분을 클릭하면 모달을 닫습니다.
- 모달에 질문 내용이 없는 경우 '질문 보내기' 버튼은 비활성화 상태입니다. 질문 내용이 있는 경우 활성화 됩니다.
</details>

### 5. 답변하기 (`/post/{id}/answer`) <a href="https://github.com/Nahyunfirstorganization/OpenMind_Team2/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C5(%EB%8B%B5%EB%B3%80%ED%95%98%EA%B8%B0)" >상세보기 - WIKI 이동</a>

<details><summary>요구사항 보기</summary>
- 답변이 입력되면 '답변 완료' 버튼이 활성화가 됩니다.
- 답변이 완료된 질문에 '수정하기' 버튼을 누르면 해당 질문칸은 수정이 가능한 질문칸으로 변경이 됩니다.
- 수정할 내용이 없으면 '수정완료' 버튼은 활성화 되지 않습니다.
- 화면 최상단의 '삭제하기' 버튼을 누르면 받은 질문들과 피드가 한 번에 삭제가 됩니다.
</details>

-->
