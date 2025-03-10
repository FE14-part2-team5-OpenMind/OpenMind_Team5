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
$ cd BK-Nutrition_Clone_Code
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
📦  **FE14-part2-team5-OpenMind** 
├─ node_modules
├─ public
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   ├── font
│   │   │   ├── actor
│   │   │   │   ├── Actor-Regular.ttf
│   │   │   │   └── Actor.css
│   │   │   └── pretendard
│   │   │       ├── pretendard.css
│   │   │       ├── woff
│   │   │       │   ├── Pretendard-Black.woff
│   │   │       │   ├── Pretendard-Bold.woff
│   │   │       │   ├── Pretendard-ExtraBold.woff
│   │   │       │   ├── Pretendard-ExtraLight.woff
│   │   │       │   ├── Pretendard-Light.woff
│   │   │       │   ├── Pretendard-Medium.woff
│   │   │       │   ├── Pretendard-Regular.woff
│   │   │       │   ├── Pretendard-SemiBold.woff
│   │   │       │   └── Pretendard-Thin.woff
│   │   │       └── woff2
│   │   │           ├── Pretendard-Black.woff2
│   │   │           ├── Pretendard-Bold.woff2
│   │   │           ├── Pretendard-ExtraBold.woff2
│   │   │           ├── Pretendard-ExtraLight.woff2
│   │   │           ├── Pretendard-Light.woff2
│   │   │           ├── Pretendard-Medium.woff2
│   │   │           ├── Pretendard-Regular.woff2
│   │   │           ├── Pretendard-SemiBold.woff2
│   │   │           └── Pretendard-Thin.woff2
│   │   ├── icons
│   │   ├── images
│   │   └── react.svg
│   ├── components
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   ├── reset.css
│   └── styles
│       ├── feedCardStyle.js
│       └── individualFeedStyle.js
 ├─ .gitignore
 ├─ eslint.config.js
 ├─ index.html
 ├─ package-lock.json
 ├─ package.json
 ├─ README.md
 └─ vite.config.js

```

### 1. 디렉토리 설명

### assets

- 모든 이미지가 들어가는 폴더
- 이미지 이름의 경우 직관적으로 작명

### components

- 재사용 가능한 컴포넌트

### hooks

- 다양한 커스텀 훅들
    - fetch 훅

### pages

- 다양한 페이지 화면들

### services

- api 요청 및 비즈니스 로직
    - axios, fetch를 사용한 api 요청 함수를 모아둔 파일
    - 로그인, 회원가입 관련
    - 상품 관련

### context

- context api를 사용한 글로벌 상태를 관리하는 폴더

### store

- 상태관리
- 리덕스나 zustand, recoil을 사용하기 위한 디렉토리

### routes

- 리엑트 라우터 파일을 위한 공간

### utils

- 재사용할 수 있는 자주 사용하는 함수들을 모아놓은 폴더
- 날짜 변환, 데이터 정리 등

### tests

- 테스트 코드 저장

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
