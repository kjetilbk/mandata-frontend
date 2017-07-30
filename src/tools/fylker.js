import ostfold from './kandidater/Østfold.json';
import akershus from './kandidater/Akershus.json';
import oslo from './kandidater/Oslo.json';
import austagder from './kandidater/Aust-Agder.json';
import buskerud from './kandidater/Buskerud.json';
import finnmark from './kandidater/Finnmark.json';
import hedmark from './kandidater/Hedmark.json';
import hordaland from './kandidater/Hordaland.json';
import moreogromsdal from './kandidater/Møre og Romsdal.json';
import nordtrondelag from './kandidater/Nord-Trøndelag.json';
import nordland from './kandidater/Nordland.json';
import oppland from './kandidater/Oppland.json';
import rogaland from './kandidater/Rogaland.json';
import sognogfjordane from './kandidater/Sogn og Fjordane.json';
import sortrondelag from './kandidater/Sør-Trøndelag.json';
import telemark from './kandidater/Telemark.json';
import troms from './kandidater/Troms.json';
import vestagder from './kandidater/Vest-Agder.json';
import vestfold from './kandidater/Vestfold.json';

const fylker = [
  {
    navn: "Østfold",
    id: "østfold",
    kandidater: ostfold
  },
  {
    navn: "Akershus",
    id: "akershus",
    kandidater: akershus
  },
  {
    navn: "Oslo",
    id: "oslo",
    kandidater: oslo
  },
  {
    navn: "Hedmark",
    id: "hedmark",
    kandidater: hedmark
  },
  {
    navn: "Oppland",
    id: "oppland",
    kandidater: oppland
  },
  {
    navn: "Buskerud",
    id: "buskerud",
    kandidater: buskerud
  },
  {
    navn: "Vestfold",
    id: "vestfold",
    kandidater: vestfold
  },
  {
    navn: "Telemark",
    id: "telemark",
    kandidater: telemark
  },
  {
    navn: "Aust-Agder",
    id: "austagder",
    kandidater: austagder
  },
  {
    navn: "Vest-Agder",
    id: "vestagder",
    kandidater: vestagder
  },
  {
    navn: "Rogaland",
    id: "rogaland",
    kandidater: rogaland
  },
  {
    navn: "Hordaland",
    id: "hordaland",
    kandidater: hordaland
  },
  {
    navn: "Sogn og Fjordane",
    id: "sognogfjordane",
    kandidater: sognogfjordane
  },
  {
    navn: "Møre og Romsdal",
    id: "møreogromsdal",
    kandidater: moreogromsdal
  },
  {
    navn: "Sør-Trøndelag",
    id: "sørtrøndelag",
    kandidater: sortrondelag
  },
  {
    navn: "Nord-Trøndelag",
    id: "nordtrøndelag",
    kandidater: nordtrondelag
  },
  {
    navn: "Nordland",
    id: "nordland",
    kandidater: nordland
  },
  {
    navn: "Troms",
    id: "troms",
    kandidater: troms
  },
  {
    navn: "Finnmark",
    id: "finnmark",
    kandidater: finnmark
  }
];

export default fylker;
