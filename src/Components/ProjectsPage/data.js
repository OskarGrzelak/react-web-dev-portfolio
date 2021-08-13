import bone from '../../img/czaszniw.jpg'
import climbing from '../../img/okk.jpg'
import saturnin from '../../img/saturnin.jpg'
import fm from '../../img/fm.jpg'

export const projects = [
  {
    id: 'item-1',
    name: 'Strona promująca serię “Czas Żniw” Samanthy Shannon',
    tags: ['HTML5', 'CSS3', 'Sass', 'JavaScript'],
    description:
      'Przy okazji wydania w Polsce czwartego tomu serii “Czas Żniw” wydawca zamówił stworzenie strony internetowej, reklamującej wchodzące w jego skład powieści. Cykl skierowany jest przede wszystkim do młodzieży. Dlatego w designie postawiłem na mocne kolory, nawiązujące do poszczególnych tomów, masywnym liternictwem wyróżniłem tytuły, a całość uatrakcyjniłem przyjemnymi dla oka animacjami.',
    image: bone,
    link: 'https://czaszniw.wsqn.pl/'
  },
  {
    id: 'item-2',
    name: 'Witryna internetowa klubu wspinaczkowego w duńskim Odense',
    tags: ['WordPress', 'PHP', 'JavaScript'],
    description:
      'Działający w Odense w Danii klub wspinaczkowy potrzebował nowej strony internetowej. Klient wymagał prostego systemu zarządzania treścią, więc zdecydowałem się witrynę postawić na WordPressie. Efekt końcowy łączy funkcjonalność ze współczesnym, nawiązującym do sportów wspinaczkowych designem.',
    image: climbing,
    link: 'http://odenseklatreklub.dk/'
  },
  {
    id: 'item-3',
    name: 'Strona promująca powieść “Saturnin” Jakuba Małeckiego',
    tags: ['HTML5', 'CSS3', 'Sass', 'JavaScript'],
    description:
      'Wydawca powieści “Saturnin” zlecił wykonanie strony internetowej, której tematem przewodnim miała być wędrówka śladami protagonisty powieści. Główną częścią strony jest więc interaktywna mapa, która pozwala użytkownikowi poznać najważniejsze w książce miejsca i historie z nimi związane. Wygląd podstron z informacjami o poszczególnych lokacjach luźno inspirowany jest designem przewodników turystycznych.',
    image: saturnin,
    link: 'https://saturnin.wsqn.pl/'
  },
  {
    id: 'item-4',
    name: 'Strona promująca książkę “Football Manager to moje życie”',
    tags: ['React.js', 'CSS3', 'Sass'],
    description:
      'Zlecenie stworzenia strony reklamującej książkę o kultowej grze Championship Manager okazało się być bardzo ciekawym wyzwaniem. Wydawca poprosił o prostą aplikację, która wyglądem nawiązywać miała do bijącego rekordy popularności managera piłkarskiego firmy Electronic Arts z 2001 roku. Wykonana przeze mnie strona stanowi kompromis między nostalgiczną topornością z poczatku XXI wieku a współczesnymi technikami webowymi.',
    image: fm,
    link: 'http://fm.wsqn.pl/'
  },
]
