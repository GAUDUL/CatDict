meowfacts
=========


## 1. GOAL

기존 Response

```json
{
  "data": [
    "0":    "Mother cats teach their kittens to use the litter box."
  ]
}
```

위처럼 단순 데이터 제공 API에 그치지 않고, 사용자의 접근성과 편의성을 향상시키고자
고양이 관련 데이터를 시각적으로 탐색할 수 있는 웹 페이지를 추가로 구현하였습니다.



## 2. Requirements

#### * node:16-alpine 기반
- Node.js: 16.20.2
- npm: 8.19.4
- musl libc: 1.2.4
- OpenSSL: 3.0.9
- ca-certificates: 20230506-r2
- BusyBox: 1.36.1



## 3. Docker Image Download & Installation

- 이미지 다운로드 이후 컨테이너 생성하는 방법
```
docker run [이미지명]:[태그]
```

- DockerHub에 존재하는 이미지를 다운로드하는 방법
```
docker pull [이미지명]:[태그]
```

- Dockerfile을 이용하여 이미지 빌드하는 방법
```
docker build -t [이미지명]:[태그] .     # Dockerfile 위치에서 실행
```

- tar파일을 이용하여 이미지 빌드하는 방법
```
docker load -i [tar파일명].tar
```

## 4. Running with Docker

1. 컨테이너를 실행합니다.
```
docker run -dit -p [호스트포트]:5000 [이미지명]:[태그]
```
- -p 옵션으로 호스트와 컨테이너 간 포트 매핑을 설정합니다.
- [호스트 포트]에는 호스트에서 사용 가능한 유효한 포트 번호를 적어주세요.



2. 컨테이너에 접속합니다.
```
docker exec -it [컨테이너ID] /bin/bash
```



3. 컨테이너 내부에서 프로젝트 루트 디렉터리로 이동한 후 다음 명령을 실행합니다.
```
npm start
```



4. 웹 브라우저에서 http://[서버IP주소]:[호스트포트]에 접속합니다.



## 5. Project Directory Structure
```
CatDict/
├── .github/           # GitHub Actions 및 워크플로우 설정
├── docs/
├── public/            # 정적 프론트엔드 파일
│   ├── index.html
│   ├── dictset.html
│   ├── dict.html
│   ├── css/           # css 파일
│   └── js/            # js 파일
├── src/
│   ├── app.js         # 서버 진입점 및 주요 API 라우팅 설정 
│   ├── middleware.js  # 미들웨어 설정
│   └── models/        # 데이터 모델
├── tests/             # 테스트 코드
├── .eslintrc.js
├── .gitignore 
├── Dockerfile
├── LICENSE            # 라이선스 정보 (MIT)
├── README.md
├── package.json       # 프로젝트 메타데이터 및 의존성 목록
└── package-lock.json  # 의존성 버전 고정 파일
```



## 6. Stopping the Application

애플리케이션 서버 실행을 중지하려면 터미널에 다음 키를 누르세요.
```
Ctrl + C
```

