import imageProject1 from '../img/image_czaszniw.jpg'
import imageProject2 from '../img/image_klatreklub.jpg'
import imageProject3 from '../img/image_zamiec.jpg'
import imageProject4 from '../img/image_saturnin.jpg'
import imageProject5 from '../img/image_polozna.jpg'
import imageProject6 from '../img/image_fm.jpg'
import imageProject7 from '../img/image_todos.jpg'
import imageProject8 from '../img/image_memory.jpg'
import mockupProject1 from '../img/mockup_czaszniw.jpg'
import mockupProject2 from '../img/mockup_klatreklub.jpg'
import mockupProject4 from '../img/mockup_saturnin.jpg'
import mockupProject6 from '../img/mockup_fm.jpg'

export const projects = [
  {
    id: 'project-1',
    featured: true,
    name: 'Strona promująca serię “Czas Żniw” Samanthy Shannon',
    tags: ['HTML5', 'CSS3', 'Sass', 'JavaScript'],
    description:
      'Przy okazji wydania w Polsce czwartego tomu serii “Czas Żniw” wydawca zamówił stworzenie strony internetowej, reklamującej wchodzące w jego skład powieści. Cykl skierowany jest przede wszystkim do młodzieży. Dlatego w designie postawiłem na mocne kolory, nawiązujące do poszczególnych tomów, masywnym liternictwem wyróżniłem tytuły, a całość uatrakcyjniłem przyjemnymi dla oka animacjami.',
    mockup: mockupProject1,
    image: imageProject1,
    link: 'https://czaszniw.wsqn.pl/',
  },
  {
    id: 'project-2',
    featured: true,
    name: 'Witryna internetowa klubu wspinaczkowego w duńskim Odense',
    tags: ['WordPress', 'PHP', 'JavaScript'],
    description:
      'Działający w Odense w Danii klub wspinaczkowy potrzebował nowej strony internetowej. Klient wymagał prostego systemu zarządzania treścią, więc zdecydowałem się witrynę postawić na WordPressie. Efekt końcowy łączy funkcjonalność ze współczesnym, nawiązującym do sportów wspinaczkowych designem.',
    mockup: mockupProject2,
    image: imageProject2,
    link: 'http://odenseklatreklub.dk/',
  },
  {
    id: 'project-3',
    featured: false,
    name: 'Strona promująca nowy kryminał Tomasza Duszyńskiego',
    tags: ['HTML5', 'CSS3', 'Sass', 'JavaScript'],
    description:
      '“Glatz. Zamieć” to retrokryminał z akcją osadzoną w okolicach Kłodzka w latach 20-tych XX wieku. Uznałem, że stonowana kolorystyka, opierająca się na odcieniach szarości z mocnym czerwonym akcentem najlepiej odda klimat powieści. Zdecydowałem się również postawić na krój czcionki o stałej szerokości znaku, co ma nawiązywać do projektu okładki książki. Głównym punktem strony jest ponownie mapa umożliwiająca użytkownikowi poznanie ważnych dla fabuły lokacji.',
    mockup: '',
    image: imageProject3,
    link: 'http://zamiec.wsqn.pl/',
  },
  {
    id: 'project-4',
    featured: true,
    name: 'Strona promująca powieść “Saturnin” Jakuba Małeckiego',
    tags: ['HTML5', 'CSS3', 'Sass', 'JavaScript'],
    description:
      'Wydawca powieści “Saturnin” zlecił wykonanie strony internetowej, której tematem przewodnim miała być wędrówka śladami protagonisty powieści. Główną częścią strony jest więc interaktywna mapa, która pozwala użytkownikowi poznać najważniejsze w książce miejsca i historie z nimi związane. Wygląd podstron z informacjami o poszczególnych lokacjach luźno inspirowany jest designem przewodników turystycznych.',
    mockup: mockupProject4,
    image: imageProject4,
    link: 'https://saturnin.wsqn.pl/',
  },
  {
    id: 'project-5',
    featured: false,
    name: 'Strona promująca powieść “Położna z Auschwitz” Magdy Knedler',
    tags: ['HTML5', 'CSS3', 'Sass', 'JavaScript'],
    description:
      'Przy tworzeniu strony internetowej reklamującej należącą do nurtu literatury obozowej powieść Magdy Knedler miałem nieco mniej pracy niż zwykle. Tym razem wydawca dostarczył projekt layoutu. Do moich zadań należało zakodowanie strony na jego podstawie. Dostarczony projekt obejmował jedynie wersję desktopową, więc dostosowanie strony do urządzeń mobilnych leżało już w mojej gestii.',
    mockup: '',
    image: imageProject5,
    link: 'https://poloznazauschwitz.pl/',
  },
  {
    id: 'project-6',
    featured: true,
    name: 'Strona promująca książkę “Football Manager to moje życie”',
    tags: ['React.js', 'CSS3', 'Sass'],
    description:
      'Zlecenie stworzenia strony reklamującej książkę o kultowej grze Championship Manager okazało się być bardzo ciekawym wyzwaniem. Wydawca poprosił o prostą aplikację, która wyglądem nawiązywać miała do bijącego rekordy popularności managera piłkarskiego firmy Electronic Arts z 2001 roku. Wykonana przeze mnie strona stanowi kompromis między nostalgiczną topornością z poczatku XXI wieku a współczesnymi technikami webowymi.',
    mockup: mockupProject6,
    image: imageProject6,
    link: 'http://fm.wsqn.pl/',
  },
  {
    id: 'project-7',
    featured: false,
    name: 'Treningowa aplikacja do notowania zadań do wykonania',
    tags: ['HTML5', 'CSS3', 'Sass', 'JavaScript'],
    description:
      'Aplikację wykonałem w ramach utrwalania wiedzy i praktycznych ćwiczeń z JavaScriptu. Użytkownik może dodawać do listy zadania, te są następnie wyświetlane w różnych kategoriach w zależności od terminu wykonania danego zadania. Aplikację tworzyłem trzy lata temu, na samym początku swojej kariery, i dziś zupełnie inaczej podszedłbym do tematu. Niemniej, nawet dziś jestem bardzo zadowolony z designu.',
    mockup: '',
    image: imageProject7,
    link: 'http://oskargrzelak.pl/todos/',
  },
  {
    id: 'project-8',
    featured: false,
    name: 'Wariacja na temat popularnej gry Memory',
    tags: ['HTML5', 'CSS3', 'Sass', 'JavaScript'],
    description:
      'To jedna z pierwszych aplikacji webowych, jakie stworzyłem. Moja wersja ma dwa warianty. W pierwszym użytkownik może odnajdywać pary kart o takich samych kolorach. Zestawy kolorów generowane są losowo. Drugi wariant opiera się na zdjęciach. Te również za każdym razem pobierane są losowo. W tym celu skorzystałem z api witryny Unsplash. Użytkownik ma do wyboru trzy poziomu trudności, różniące się liczbą kart w grze.',
    mockup: '',
    image: imageProject8,
    link: 'http://oskargrzelak.pl/memorygame/',
  },
]

export const services = [
  {
    id: 'service-1',
    name: 'Budowa reklamowej strony internetowej',
    details:
      'Chcesz skutecznie zareklamować swój produkt w internecie? Potrzebujesz do tego atrakcyjnej strony internetowej, która oczaruje klienta. Mogę w tym pomóc.\n\nOferuję kompleksową usługę stworzenia takiej strony. Po przedyskutowaniu wymagań i poznaniu celów przygotuję projekt graficzny, na którego podstawie zakoduję właściwą stronę. Korzystam z najnowszych technologii, dobrze orientuję się w aktualnych trendach. Na życzenie gotowe pliki umieszczę na serwerze lub przekażę w paczce do samodzielnego odpalenia strony. Jeśli jest taka potrzeba, udostępnię również kod źródłowy.\n\nJesteś zainteresowany współpracą?',
    cta: 'Skontaktuj się ze mną',
  },
  {
    id: 'service-2',
    name: 'Udział w grupie projektowej',
    details:
      'Masz pomysł na aplikację, która podbije świat, ale brakuje Ci w zespole speca od front-endu? Z przyjemnością wypełnię lukę w ekipie. Razem możemy zbudować wszystko!\n\nDoskonale odnajduję się w pracy w zespole. Bardzo cenię sobie możliwość wymiany doświadczeń z kolegami i koleżankami po fachu. Do swoich zadań podchodzę z jak największą sumiennością i starannością, przestrzegam założonych deadline’ów. Nie boję się wyzwań.\n\nChcesz mnie mieć w swojej grupie projektowej?',
    cta: 'Skontaktuj się ze mną',
  },
  {
    id: 'service-3',
    name: 'Zatrudnienie na etat',
    details:
      'Szukasz pracownika na pełen etat do swojej lub swojego klienta firmy? Chętnie porozmawiam o warunkach zatrudnienia.\n\nDoświadczenie front-endowe budowałem na indywidualnej pracy z różnymi klientami. Tworzyłem proste strony reklamowe, witryny internetowe zintegrowane z systemem WordPress, zajmowałem się również wprowadzaniem zmian do pisanego przez innych programistów kodu. Charakteryzują mnie sumienność wykonywania zleconych zadań i upór w dążeniu do celu.\n\nSprawdzimy, czy spełniamy swoje wzajemne wymagania?',
    cta: 'Skontaktuj się ze mną',
  },
]
