# Link Component / Client-side Navigate

NextJS자체는 프로레임 워크이다 프레임워크 자체를 잘 다뤄야 한다

그러기 위해서는 프레임 워크를 활용해서 실제 서비스를 만들어 보면서 익히는 것이다

프로젝트틀 만들면서 모든 기능을 다 사용하는 것은 아니지만 내가 어떤 기능을 만들려고 할때

프레임워크의 어떤 기능을 조합해서 만들 수 있구나를 익히기 위해사 Blog를 가지고 연습 프로젝트를 진행 할라고 한다.

## NextJS가 제공하는 여러 기능들

### page-based routing system(with dynamic routes)

file system 기반과 같은 말이다 pages안 하위 파일로 routering을 구현하고
`[slug]`를 이용해 다이나믹한 라우팅도 가능하다

### Pre-rendering SSG/SSR

빌드 할 때 생성을 해놓고 페이지를 제작 할 것 인가

요청때 마다 새로 랜더해서 줄 것인가.

### Automatic code splitting for faseter page loads

NextJS는 나름의 최적화 알고리즘으로 페이지 단위로 혹은 공통된 적절한 사이즈로 코드 splitting을 제공해준다

이 과정으로 특정 페이지 이동 혹은 특정 기능을 사용 할때 딱 필요한 만큼의 코드들만 쪼개서 가지고 오기 때문에 페이지를 빠르게 로드할 수 있는 장점이 있다

### Client-side routing with optimized prefetching

프리패칭 옵티마이징

### API Routes(with Serverless Functions)

서버따로 없이 NextJS 프레임워크만 가지고 가능

### Development enviromnent(with Fast Refresh)

yarn dev로 변경점이 바로바로 반영되는 환경을 제공한다

내가 프론트를 수정하고 build없이 바로바로 바뀐점을 체크하면서 작업을 할 수 있어서 디버깅이 편하다

## Link 와 a 차이점

처음 index 상태일때 개발자 모드 `f12`를 눌러 `Network`에 접속해서 `JS`를 본다

![](https://velog.velcdn.com/images/itkdgus489/post/8bc199b5-c962-470f-89e7-5908331efd5c/image.png)

그럼 위와 같은 화면이 나온다 그러면 여기서 `Link`를 클릭해서 이동해 보자

![](https://velog.velcdn.com/images/itkdgus489/post/5fd4a173-dee0-4d2e-abd1-bded0d170234/image.gif)
개발자모드 `Network`에 추가되는것을 볼 수 있다

이제 a tag를 클릭해 보자

![](https://velog.velcdn.com/images/itkdgus489/post/7cee0503-788b-4993-a740-a72b13746f9d/image.gif)

아까와 다르게 많은 것들을 받아오는 것을 볼 수 있다.

a tag는 브라우저에 새로운 링크를 입력해서 접속한 것과 똑같은 효과이다. Link tag가 제공하는 최적화 기능을 사용하지 않는다.

> Link 콤포넌트를 이용하면 안에서 필요한 정보들만 추가로 불러오는 식이다.

### Client Side Navigate

브라우저에서 url을 직접 쳐서 이동하는 것과 달리, JS상에서 page컴포넌트를 교체하는 것을 `Client Side Navigate`라고 부른다.

확인하기 위해서는 간단하게 background-color를 body에 주고 navigate를 해보면 확인 할 수 있다.

#### Link tag

![](https://velog.velcdn.com/images/itkdgus489/post/122dd893-a96f-4d39-8dbc-98a1af0aaf7e/image.gif)

Link tag를 타고 들어가도 gackground-color가 유지 된다

- 특징
  1. 본 서비스 외부 링크로 연결 할 때는 `<a>` tag 만 쓰면 된다
  2. Link Component에 스타일을 줄 때는 `<a>`tag에 줘야 된다

```javascript
<Link href="/posts/firstPost">
  <a>첫번째 글(Link)</a>
</Link>
```

이런식으로 작성을 해야 한다

#### a tag

![](https://velog.velcdn.com/images/itkdgus489/post/889507ae-7398-417d-9456-fac407b661df/image.gif)
a tag를 타고 들어가면 gackground-color가 없어진다

### Code Splitting

특정 페이지에 접근 할 때는 해당 페이지를 그릴때 필요한 부분만 로드
페이지 이동을 할 떈 목적지 페이지에 추가적으로 필요한 부분만 추가 로드

### Prefetching

Link 컴포넌트를 이용하면, Viewport에 LInk 컴포넌트가 노출되었을때 href로 연결된 페이지의 부분을 로드한다.
![](https://velog.velcdn.com/images/itkdgus489/post/01c38196-7160-43b2-a68d-df0a38a5b13c/image.gif)
스크롤을 내려서 Link가 노출되면 미리 필요한 데이터를 로드한다

---

# Layouts / Styling

## public

정적 리소스를 NextJS로 서빙하기 위한 디렉토리
특정한path를 주지않고 사용 가능하다.

- robots.txt
  웹에 대한 정보들을 읽어가는 크롤러들이 어떤 파일을 읽어가고 어떤파일은 읽어가면 안된다 라는 것을 정의해 놓은 파일이다.
- image

등을 넣을 수 있다.

## Image Component

`img` 라는 태그가 있지만 NextJS에서 제공하는 `Image`가 있다

`a`와 `Link`같은 존재이다

### img

```javascript
<img src="/images/profile.jpg" alt="프로필 이미지" />
```

### NextJS에서 제공하는 Image

```javascript
<Image src="/images/profile.jpg" width={140} height={140} alt="프로필 이미지" />
```

Image 태크도 Link와 같이 VIewPort에 들어갔을때 데이터를 로드한다

---

# Pre-rendering / Data Fetching

NextJS를 활용하면 페이지별로 Pre-rendering방식을 선택할 수있다.
이 페이지는 SSR, 이 페이지는 SSG 이런식으로 가능 하다.

## SSG를 사용하면 좋은 페이지

자주 바뀌지 않고 정적인 페이지가 적정하다

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

사용자가 페이지를 요청하기 전에 pre-render 할 수 있는가? 를 생각하보면 편할 것 같다.
