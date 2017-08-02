import React, { Component } from 'react';
import {logPageView} from '../tools/googleanalytics';

class Metode extends Component {
  componentDidMount(){
    logPageView(this.props.location.pathname);
  }
  render(){
    return (
      <div className="modul">
        <div className="metode-tekst">
          <h3>Hva er flertall?</h3>
          Flertall er en valgmodell som benytter seg av lokale og nasjonale
          meningsmålinger som grunnlag til å simulere Stortingsvalget i hvert
          fylke, for å si noe om sannsynligheten for ulike scenarioer. Et slikt
          relevant scenario kan være "Hvem vil oppnå Stortingsflertall?". Målet
          er å gi en indikasjon på hvordan ståa er i valget akkurat nå, og hvordan
          sjansene, være seg for seier eller sperregrense, har utviklet seg over tid.
          <h3>Hva er bakgrunnen?</h3>
          Flertall er inspirert av valgmodeller man kan se i forkant av
          amerikanske valg, som for eksempel FiveThirtyEight, Huffington Post og
          New York Times sine prognoser. Hver av de ulike prognosene følger hver
          sin metode og tar hver sine valg for å prøve å oppnå ulike mål.
          <br /> <br />
          Disse metodene har felles at de benytter meningsmålinger i
          forskjellig grad for å prøve å si noe om hvordan utfallet av valget
          kommer til å bli. Det som skiller modellene er blant annet hva de
          forsøker å oppnå: Enkelte modeller bruker f.eks. både meningsmålinger og
          økonomiske forhold sett i sammenheng med historiske resultater for å
          forsøke å svare på spørsmålet: "Hva er sannsynligheten for at
          parti/kandidat X vinner flertall etter valget?". Om dette er spørsmålet
          man forsøker å svare på, ligger det også i det at man forsøker å ta
          hensyn til at det er en stund til valget, at mye kan forandre seg, og
          at denne usikkerheten er bakt inn i modellen.
          <br /> <br />
          Flertall.no, i likhet med for eksempel FiveThirtyEight's "Now-cast"
          stiller derimot spørsmålet "Dersom valget var i dag, hva er
          sannsynligheten for (for eksempel) valgseier til
          parti/koalisjon X?". I dette ligger det altså et relevant forbehold:
          "<i>Dersom valget var i dag</i>". Med andre ord er
          &nbsp;<b>ikke</b>&nbsp;meningsmålingene blitt justert for å forsøke å
          ta høyde for historiske endringer man typisk ser i meningsmålingene i
          de siste månedene før valget: Altså er den dataen som eksisterer
          den dataen som mates inn i simuleringene.
          <h3>Hvordan kommer Flertall frem til tallene sine?</h3>
          Prosessen er delt opp i fem steg:<br /><br />
          1. <i>Hent ned</i> lokale og nasjonale meningsmålinger. <br/><br />
          2. <i>Regn ut et gjennomsnitt</i> fra målingene for hvert fylke fra en gitt
          dag, for eksempel i dag, og 14 dager tilbake i tid. Dette kalles et
          glidende gjennomsnitt.<br/><br />
          3. Dersom det ikke eksisterer en fylkesmåling i 14-dagersperioden, men
          bare eldre målinger, vil det forrige eksisterende gjennomsnittet
          i fylket benyttes.
          Siden dette kan være nokså gammel data (spesielt i de tidlige
          sommermånedene) <i>gjøres det en justering</i> av fylkessnittet dersom dataen
          er gammel, basert på hvordan de nasjonale meningsmålingene så ut på
          tidspunktet fylkesmålinga ble levert, og hvordan de nasjonale
          målingene ser ut i dag.<br/><br />
          4. Hvert justerte fylkessnitt brukes nå som utgangspunkt for å
          <i>simulere valget</i> 50 000 ganger. Hver simulering gjøres ved å trekke
          tall fra &nbsp;
          <a href="https://no.wikipedia.org/wiki/Students_t-fordeling">Students
          t-fordeling</a>, med lav frihetsgrad. Dette betyr at et partis oppslutning
          i et fylke, for en simulering, kan settes til å være et tilfeldig sted
          mellom et stykke under snittoppslutninga, og et stykke over oppslutninga.
          Med lav frihetsgrad gjøres scenarioer som med en normalfordeling ville
          vært usannsynlige noe mer sannsynlige, og sannsynlige scenarioer noe
          mer usannsynlige.<br/><br/>

          En eneste simulering kan med andre ord produsere et i
          utgangspunktet usannsynlig scenario: Alle småpartiene kan for eksempel
          i én slik simulering komme over sperregrensa. Valget simuleres dog
          50 000 ganger, slik at slike usannsynlige scenarioer blir avslørt for
          nettopp det, og de sannsynlige scenarioene kan telles opp og fastsettes
          en sannsynlighet på. <br/><br/>

          5. Konsekvensene av hver simulering regnes ut. Det norske valgsystemet
          er ikke som det amerikanske eller det franske: Det er summen av antall
          mandater vunnet fra hvert fylke som teller, og ikke hvem som får over
          50% av stemmene i en stat, eller hvem som får flest antall stemmer. Vi
          har i tillegg til direktemandater fra fylkene også
          utjevningsmandater. Fordelinga av utjevningsmandater kan være ganske
          ulik basert på bare små variasjoner i valgresultatet, både fordi disse
          variasjonene kan utgjøre forskjellen for at et parti er over eller under
          sperregrensa, men også på grunn av måten fordelinga av utjevningsmandater gjøres på.
          <br/><br/>
          Man kan i teorien regne ut hvordan utjevningsmandatene ville blitt fordelt geografisk
          dersom et målingssnitt skulle blitt valgresultatet. Fordelen med en
          modell som flertall er at man i tillegg får se hva variasjoner fra et slikt snitt har
          å si for fordelingen, og at man kan se hvor sannsynlig det er at et gitt parti får utjevningsmandatet i et gitt fylke.
          <h3>Hva betyr en sannsynlighet fra flertall.no?</h3>
           Flertall baserer seg utelukkende på meningsmålinger, og modeller som
           er mer avanserte enn denne har tatt feil av valg før. Flere modeller
           ga for eksempel Hillary Clinton over 99% sjanse for å vinne det
           amerikanske presidentvalget. Dersom en liknende målebom skulle inntreffe ved
           dette valget, vil Flertall bomme minst like ille.<br/><br/>

           Flertall er ment å gi nyttig og forhåpentligvis spennende informasjon.
           Dersom denne modellen
           gir din favorittkoalisjon svært gode sjanser, er det nok et tegn
           på at koalisjonen ligger svært godt an. Uansett tilstand er det dog
           ingen grunn til å roe ned valgkampen. Tvert imot: Flertalls sjanser forandrer
           seg med meningsmålingene, og dersom årets innspurt minner om forrige Stortingsvalgsinnspurt,
           blir det nok et jevnere valg.
           <hr />
           <h4>Siden er laget av:</h4>
           <a href="mailto:kjetil.bugge.kristoffersen@gmail.com">Kjetil Bugge Kristoffersen</a> <br/><br />
           Tusen takk til Eirik Hjorthaug Kiil for hjelp med utforminga av sida {"<3"}

        </div>
      </div>
    )
  }
}

export default Metode;
