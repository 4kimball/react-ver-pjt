# react-ver-pjt

> react와 typescript를 활용한 프로젝트들을 mono-repo로 구축하였습니다.
> mono-repo를 구축하기 위해 lerna와 yarn workspace를 사용하였습니다.



### mono-repo 구축하기

- lerna를 설치한다.

```bash
npm install -g lerna
```

- 현재 디렉토리를 lerna로 구성한다.
- `-i`옵션은 `-independent`로 패키지 배포와 관련된 버전을 패키지별로 독립적으로 하기위함이다.

```bash
lerna init -i
```

- 위의 명령어를 사용하게 되면 `lerna.json`, `package.json`과 `packages`라는 폴더가 생성된다.



- 아래의 명령을 통해 새로운 패키지를 추가한다.

```bash
lerna create [new_project_name]
```

---



### create-react-app

- 아래 명령을 통해 typescript를 적용한 react 프로젝트를 구축한다.

```bash
npx create-react-app packages/movindi --template typescript
```



### 프로젝트 실행하기

- root에서 한 개의 프로젝트를 실행하기 위해서 root에 있는 `package.json`의 scripts를 작성해준다.
- --scope는 프로젝트의 이름이다. movindi에 있는 package.json의 name을 @project/movindi로 설정하였다.

```json
  "scripts": {
    "start:movindi": "lerna run start:movindi --scope=@project/movindi"
  },
```



- 그리고 해당 프로젝트의 scripts도 아래와 같이 수정해주었다.
- `start`대신 `start:movindi`로 설정하였다.

```json
  "scripts": {
    "start:movindi": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```



- 이제 아래의 명령을 치면 movindi라는 프로젝트가 실행된다.

```bash
yarn start:movindi
```

