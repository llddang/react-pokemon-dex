# <img width="50px" src="https://github.com/user-attachments/assets/7fdfb472-6fac-43d8-b4d4-05dc97303373" alt="피카츄" /> React Pokemon Dex

## 💬 프로젝트 소개
> 📅 개발 기간 : 2025. 02.03 ~ 2025. 02. 10 (총 8일) <br/>
> 🔗 배포 주소 : [https://react-pokemon-dex-mu.vercel.app/](https://react-pokemon-dex-mu.vercel.app/) <br/>
> 
> 자신만의 6마리 포켓몬을 선택하고 상세 내용을 볼 수 있는 React 기반 **싱글 페이지 애플리케이션(SPA)** 입니다. <br/>
>
> **styled-componets**를 통한 컴포넌트 스타일링, **RTK**를 활용한 상태 관리로 이루어져 있으며 <br/>
> **react-router-dom**을 활용하여 페이지 간 네비게이션을 처리합니다. <br/>
>
> 이 프로젝트를 통해 **Prop Drilling**, **Context API**, **Redux Toolkit**을 이용한 상태 관리 방법을 학습했습니다. <br/>
>
> PC와 모바일 환경 모두에 최적화된 반응형 디자인을 적용하였습니다.

<br/>
<br/>

## 📑 페이지 구성
| 페이지      | 경로           | 설명                         |
| ----------- | -------------- | ---------------------------- |
| 홈          | `/`            | 포켓몬 홈화면                |
| 포켓몬 도감 | `/pokemon`         | 포켓몬 도감 및 포켓몬 등록   |
| 포켓몬 상세 | `/pokemon/detail/:id` | 선택한 포켓몬 상세 정보 확인 |

- 홈 페이지 `/`
  - <img width="600px" src="https://github.com/user-attachments/assets/f9f47c08-398b-4a14-996c-04558c74bca9" alt="홈 페이지" />

- 포켓몬 도감 페이지 `/pokemon`
  - <img width="600px" src="https://github.com/user-attachments/assets/8069b124-17d6-4bcd-a5dd-21c75e255e88" alt="포켓몬 도감 가이드 라인" />
  - <img width="600px" src="https://github.com/user-attachments/assets/20491e14-ffd8-4b73-911e-c7593b03de82" alt="포켓몬 도감 페이지" />

- 포켓몬 상세 페이지 `/poekmon/detial/:id`
  - <img width="600px" src="https://github.com/user-attachments/assets/4de5fd40-3bba-48d0-b04c-834a859d18e4" alt="포켓몬 상세 페이지" />

<br/>
<br/>

## ⚙ 프로젝트 기능 소개
- **Redux Toolkit의 persist** 기능을 통해 로컬 스토리지에 자신이 등록한 포켓몬을 저장합니다.
- **useRef**와 **커스텀 훅**을 통해 키보드를 통해 선택된 카드를 이동할 수 있습니다.
- 등록된 포켓몬과 현재 집중된 포켓몬은 하위 **대시보드**에서 확인할 수 있습니다.
- 기본 브라우저 알럿 대신 **토스트 팝업**을 사용하여 사용자 경험을 개선했습니다.
- **react-router-dom**을 통해 페이지 리로드 없이 페이지간 화면 전환이 가능합니다.
- **이벤트 위임** 및 **React.memo**를 활용하여 변경이 일어난 컴포넌트만 리렌더링되도록 렌더링 최적화했습니다.

<br/>
<br/>

## 🕶️ 기술 스택
#### **Deploy** <br/>
 &emsp; <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>

#### **Frontend** <br/>
 &emsp; <img src="https://img.shields.io/badge/React_18.3.1-087ea4?style=for-the-badge&logo=React&logoColor=white" alt="React"/> <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript"/> <img src="https://img.shields.io/badge/Yarn_1.22.22-514C87.svg?style=for-the-badge&logo=Yarn&logoColor=white" alt="Yarn"/> <img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="styled-component"/>

<br/>
<br/>

## 🚀 트러블 슈팅

#### [자연스러운 UX: 뒤로 가기에서 스크롤 위치 유지하기](https://llddang-blog.tistory.com/70)
#### [React 프로젝트 이벤트 위임을 통한 리렌더링 최적화](https://llddang-blog.tistory.com/73)

<br/>
<br/>

## 📁 프로젝트 구조

```markdown
📦 react-pokemon-dex
├─ index.html
├─ public/
└─ src
   ├─ App.tsx
   ├─ app
   │  ├─ Provider.tsx
   │  └─ Router.tsx
   ├─ components
   │  ├─ common (프로젝트 전반적으로 사용되는 컴포넌트)
   │  └─ features (특정 기능에 종속된 컴포넌트)
   │     ├─ pokemon-detail
   │     └─ pokemon
   ├─ constants.ts
   ├─ lib
   │  ├─ hooks
   │  │  ├─ useFocusedPokemonStore.ts (rtk에 저장되는 현재 focus된 포켓몬을 관리하기 위한 훅)
   │  │  ├─ useGridColumCount.ts (ref를 통해 현재 grid의 columnt 갯수를 반환하는 훅)
   │  │  └─ usePokemonsStore.ts (rtk에 저장되는 포켓몬 도감을 관리하기 위한 훅)
   │  └─ utils
   │     └─ format.util.ts
   ├─ main.tsx
   ├─ mocks.ts
   ├─ page
   ├─ store
   ├─ styles
   └─ types (타입 정의)
```

