# **FE14-part2-team5-OpenMind**

# 🖥️ 프로젝트 소개
코드잇 스프린트 기초 프로젝트

<br/>

# 🕰️ 개발 기간

25/03/06 ~ 25/03/21

<br/>

# 1. 시작하기
---

### 1. Clone
```
$ git clone https://github.com/FE14-part2-team5-OpenMind/OpenMind_Team5.git
$ cd OpenMind_Team5
$ npm install
```
### 2. Run

```
$ npm run dev
```
<br/>
<br/>

# 2. 기술 스택

---

<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">

<img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

<br/>
<br/>

# 3. 디렉토리 구조

---

```
📦  FE14-part2-team5-OpenMind
├─ node_modules
├─ public
├── src
│   ├── assets
│   │   ├── font
│   │   │   ├── actor
│   │   │   └── pretendard
│   │   ├── icons
│   │   ├── images
│   ├── components
│   │   ├── AddQuestion.jsx
│   │   ├── Answer.jsx
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── FeedBody.jsx
│   │   ├── FeedCard.jsx
│   │   ├── FeedCardPlaceholder.jsx
│   │   ├── FeedHeader.jsx
│   │   ├── IconBox.jsx
│   │   ├── Modal
│   │   │   ├── AnswerModal.jsx
│   │   │   └── Modal.jsx
│   │   ├── Pagination.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── ProfileCardItem.jsx
│   │   ├── TextForm.jsx
│   │   └── common
│   │       └── GlobalStyle.jsx
│   ├── hooks
│   │   ├── useIndividualQuestions.js
│   │   ├── useKakaoShare.js
│   │   ├── useScroll.js
│   │   ├── useSubjectInfo.js
│   │   └── useTextForm.js
│   ├── pages
│   │   ├── AnswerPage.jsx
│   │   ├── IndividualFeed.jsx
│   │   ├── MainPage.jsx
│   │   └── QuestionList.jsx
│   ├── services
│   │   ├── answerService.js
│   │   ├── getIndividualQuestions.js
│   │   ├── getSubjectInfo.js
│   │   ├── mainpageService.js
│   │   ├── postLikeDislike.js
│   │   └── postQuestion.js
│   ├── styles
│   │   ├── AnswerPageStyle.js
│   │   ├── AnswerStyle.js
│   │   ├── buttonStyle.js
│   │   ├── feedCardPlaceholderStyle.js
│   │   ├── feedCardStyle.js
│   │   ├── individualFeedStyle.js
│   │   ├── mainpageStyle.js
│   │   ├── modalStyle.js
│   │   └── rotatingAnimation.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── reset.css
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
└─ vite.config.js
```

---

## 📁 node_modules/
- 프로젝트에서 사용하는 npm 패키지가 설치되는 디렉토리
- `package.json`에서 정의된 패키지들이 저장되며, 실행 파일과 의존성이 포함됨

---

## 📁 public/
- 정적 자원(HTML, 이미지, 폰트 등)이 위치하는 폴더
- `public` 폴더 내의 파일은 Vite에서 변환하지 않고 그대로 제공됨

---

## 📁 src/ (소스 코드 폴더)
### 📂 assets/ (정적 자원 폴더)
- `font/` → 프로젝트에서 사용되는 폰트 저장 (`actor`, `pretendard` 등)
- `icons/` → 아이콘 파일 저장
- `images/` → 프로젝트에서 사용하는 이미지 저장

### 📂 components/ (재사용 가능한 UI 컴포넌트 폴더)
- `AddQuestion.jsx` → 질문 추가 버튼 및 입력 폼 컴포넌트
- `Answer.jsx` → 답변을 표시하는 컴포넌트
- `Badge.jsx` → 배지(마크) 컴포넌트
- `Button.jsx` → 공통 버튼 컴포넌트
- `FeedBody.jsx` → 피드 본문 렌더링 컴포넌트
- `FeedCard.jsx` → 개별 피드 카드 UI 컴포넌트
- `FeedCardPlaceholder.jsx` → 피드 카드 로딩 시 표시될 플레이스홀더 컴포넌트
- `FeedHeader.jsx` → 피드 목록의 헤더 컴포넌트
- `IconBox.jsx` → 아이콘 박스 컴포넌트
- `Modal/`
  - `AnswerModal.jsx` → 답변 입력 모달
  - `Modal.jsx` → 공통 모달 컴포넌트
- `Pagination.jsx` → 페이지네이션(페이지 이동) 컴포넌트
- `ProfileCard.jsx` → 사용자 프로필 카드 컴포넌트
- `ProfileCardItem.jsx` → 프로필 카드 내부 아이템 컴포넌트
- `TextForm.jsx` → 텍스트 입력 폼 컴포넌트
- `common/`
  - `GlobalStyle.jsx` → 프로젝트 전체에 적용되는 글로벌 스타일

### 📂 hooks/ (커스텀 훅 폴더)
- `useIndividualQuestions.js` → 특정 질문 데이터를 가져오는 훅
- `useKakaoShare.js` → 카카오 공유 기능을 위한 훅
- `useScroll.js` → 스크롤 관련 기능을 제공하는 훅
- `useSubjectInfo.js` → 특정 주제 정보를 가져오는 훅
- `useTextForm.js` → 텍스트 입력 관리 훅

### 📂 pages/ (페이지 단위 컴포넌트 폴더)
- `AnswerPage.jsx` → 답변 페이지
- `IndividualFeed.jsx` → 개별 피드 상세 페이지
- `MainPage.jsx` → 메인 피드 페이지
- `QuestionList.jsx` → 질문 목록 페이지

### 📂 services/ (API 호출 및 데이터 관리 폴더)
- `answerService.js` → 답변 관련 API 호출
- `getIndividualQuestions.js` → 특정 질문 데이터를 가져오는 API 호출
- `getSubjectInfo.js` → 특정 주제 정보를 가져오는 API 호출
- `mainpageService.js` → 메인 페이지 관련 API 호출
- `postLikeDislike.js` → 좋아요/싫어요 기능을 처리하는 API 호출
- `postQuestion.js` → 질문 등록 API 호출

### 📂 styles/ (스타일 관련 파일 폴더)
- `AnswerPageStyle.js` → 답변 페이지 스타일
- `AnswerStyle.js` → 답변 컴포넌트 스타일
- `buttonStyle.js` → 버튼 스타일
- `feedCardPlaceholderStyle.js` → 피드 카드 플레이스홀더 스타일
- `feedCardStyle.js` → 피드 카드 스타일
- `individualFeedStyle.js` → 개별 피드 스타일
- `mainpageStyle.js` → 메인 페이지 스타일
- `modalStyle.js` → 모달 스타일
- `rotatingAnimation.js` → 회전 애니메이션 관련 스타일

### 📄 기타 주요 파일
- `App.css` → 전체 애플리케이션 스타일
- `App.jsx` → 애플리케이션의 루트 컴포넌트
- `index.css` → 글로벌 CSS 스타일
- `main.jsx` → 애플리케이션의 진입점(React 렌더링 시작)
- `reset.css` → 브라우저 스타일 초기화

---

- **.gitignore** → Git에 포함되지 않을 파일 및 디렉토리 목록을 정의
- **eslint.config.js** → ESLint(코드 스타일 및 린팅 도구)의 설정 파일
- **index.html** → 애플리케이션의 기본 HTML 파일 (React가 렌더링될 루트)
- **package-lock.json** → 설치된 npm 패키지의 정확한 버전 정보 기록
- **package.json** → 프로젝트 메타데이터 및 npm 패키지 목록 정의
- **README.md** → 프로젝트 소개 및 설명 문서
- **vite.config.js** → Vite(빠른 개발 서버 및 번들러) 설정 파일

<br/>
<br/>

# 4. 협업 방법

---

## 1. Branching Strategy

PR을 통해 `Feature 브랜치`들을 `develop`에 `merge`하고,
최종 배포할 시기가 되면 Admin 관리자가 `develop 브랜치`를 `main 브랜치`에 머지하여 배포하는 단순한 구조를 따릅니다.

## 2. 협업 과정

### 1.  본인 기능 작업
본인 작업 하기 전에 `git pull origin develop`를 해줍니다
<br/>

### 2. 브랜치 생성
MyPage를 작업 하기 전에 브랜치 생성을 해줍니다

`// 아래 명령어를 통해 브랜치 생성`

`$ git checkout -b Feature/[기능요약]`
<br/>

### 3. 작업 후 push
`$ git push origin [브랜치명]`
<br/>

### 4. Github에서 PR을 생성합니다. PR 시 나타나는 템플릿을 채워주세요.
```
**## Feature Description**- 이런 이런 기능입니다

**## To Reviewers**- 이런 이런 점을 유의해주세요
```

아래 예시를 참고해주세요

![](https://user-images.githubusercontent.com/110515401/230116422-6631dd1a-19b7-414d-b143-3521a4765b25.png)
<br/>

### 6. 코드 리뷰
1. 작업한 개발자가 PR을 요청하면 카카오톡으로 `작업자이름-기능설명 PR 올렸습니다.` 라고 보내야 합니다.
2. 다른 개발자가 코드리뷰를 했다면 `작업자이름- 기능설명 PR 검토 완료!` 라고 보내줍니다.
3. 1명이상의 개발자가 검토완료가 되었다면 작업한 개발자는 Merge를 합니다.
- *️⃣ Merge 시 나타나는 템플릿을 아래와 같이 채워주세요
    
    ![](https://user-images.githubusercontent.com/110515401/230120382-3073d734-5675-4ee6-af1f-b39a1909fe77.png)
    
- *️⃣ Squash Merge되며, Merge된 Branch는 자동 삭제됩니다.
<br/>

### 7. 로컬에서 master 브랜치로 체크아웃한 뒤 Pull하고, 새로운 브랜치로 분기하여 다음 작업을 진행해주세요.
`$ git checkout develop`

`$ git pull origin develop`

`$ git checkout -b Feture/작업자이름/[기능요약]`

> 주의사항
> 
> 
> > 브랜치를 Local에서 만들고 지우지 않으면 다음에 비슷한 이름을 사용한 브랜치를 만들 수 없게 됩니다 반드시 브랜치를 지워주세요!
> > 

`// 무슨 브랜치 있는지 확인`

`$ git branch`


`// 브랜치 삭제`

`$ git branch -d`

<br/>
<br/>

# 4. 브랜치 이름 컨벤션

```
Feature/작업자이름/[기능요약]

- 맨 첫글자 F만 대문자로, 기능요약은 소문자로 작성해주세요
- 기능요약은 영어로 작성해주세요

ex) Feature/leehyunseok/modal-publishing

```

<br/>
<br/>

# 5. 커밋 컨벤션

```
<태그>: <제목>

- : 뒤에만 띄어쓰기가 있습니다
- 제목은 한영 혼용이 가능합니다 (가급적 영어로)
- 태그의 첫글자는 소문자로 작성해주세요
- 태그는 아래에 적힌 것들만 사용해주세요
- 검사 예외 조건 (자동 생성, 최초 커밋)
 - Merge branch*, Merge pull request*, initial*

feat: 새로운 기능 추가, 기능 로직 변경
fix: 버그 수정
refactor: 코드 리팩토링 (기능 변화 X)
style: 코드 포맷팅, 코드 변경이 없는 경우
chore: 빌드 업무 수정, 패키지 매니저 수정
docs: 문서 수정, 주석
test : Test 관련한 코드의 추가, 수정
! : 급한 변경 사항인 경우에 추가 (접두사, () 뒤 / 콜론 이전)
() : 추가 요약 정보가 필요할 경우 (접두사 뒤 / !, 콜론 이전)
BREAKING CHANGE : 급한 변경 footer에 추가

```
