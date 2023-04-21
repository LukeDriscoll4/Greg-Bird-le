const players = [
  {
    name: 'Tom Trbojevic',
    sydney: true,
    team: 'MAN',
    f_b: 'Back',
    position: 'WFB',
    age: 26,
    height: 194,
    image:
      'https://www.seaeagles.com.au/remote.axd?https://rugbyimages.statsperform.com/Player%20Bodyshots/111/2022/500002/Trbojevic%2CT-NRL-H-GP009-COPY-body-shot.png?center=0.5%2C0.5&preset=player-profile-small',
  },
  {
    name: 'Reuben Garrick',
    sydney: true,
    team: 'MAN',
    f_b: 'Back',
    position: 'WFB',
    age: 25,
    height: 188,
    image:
      'https://www.seaeagles.com.au/remote.axd?https://rugbyimages.statsperform.com/Player%20Bodyshots/111/2022/500002/Garrick%2CR-NRL-H-GP011-COPY-body-shot.png?center=0.5%2C0.5&preset=player-profile-small',
  },
  {
    name: "Toluta'u Koula",
    sydney: true,
    team: 'MAN',
    f_b: 'Back',
    position: 'CTR',
    age: 20,
    height: 180,
    image:
      'https://www.seaeagles.com.au/remote.axd?https://rugbyimages.statsperform.com/Player%20Bodyshots/111/2022/500002/Koula%2CT-NRL-H-GP007-COPY-body-shot.png?center=0.5%2C0.5&preset=player-profile-small',
  },
  {
    name: 'Brad Parker',
    sydney: true,
    team: 'MAN',
    f_b: 'Back',
    position: 'CTR',
    age: 25,
    height: 193,
    image:
      'https://www.seaeagles.com.au/remote.axd?https://rugbyimages.statsperform.com/Player%20Bodyshots/111/2022/500002/Parker%2CB-NRL-H-GP006-COPY-body-shot.png?center=0.5%2C0.5&preset=player-profile-small',
  },
  {
    name: 'Jason Saab',
    sydney: true,
    team: 'MAN',
    f_b: 'Back',
    position: 'WFB',
    age: 22,
    height: 199,
    image:
      'https://www.seaeagles.com.au/remote.axd?https://rugbyimages.statsperform.com/Player%20Bodyshots/111/2022/500002/Saab%2CJ-NRL-H-GP012-COPY-body-shot.png?center=0.5%2C0.5&preset=player-profile-small',
  },
  {
    name: 'Josh Schuster',
    sydney: true,
    team: 'MAN',
    f_b: 'Back',
    position: 'HLF',
    age: 21,
    height: 185,
    image:
      'https://www.seaeagles.com.au/remote.axd?https://rugbyimages.statsperform.com/Player%20Bodyshots/111/2022/500002/Schuster%2CJ-NRL-H-GP005-COPY-body-shot.png?center=0.5%2C0.5&preset=player-profile-small',
  },
  {
    name: 'Daly Cherry-Evans',
    sydney: true,
    team: 'MAN',
    f_b: 'Back',
    position: 'HLF',
    age: 33,
    height: 183,
    image:
      'https://www.seaeagles.com.au/remote.axd?https://rugbyimages.statsperform.com/Player%20Bodyshots/111/2022/500002/Cherry-Evans%2CD-NRL-H-GP011-COPY-body-shot.png?center=0.5%2C0.5&preset=player-profile-small',
  },
  {
    name: 'Josh Aloiai',
    sydney: true,
    team: 'MAN',
    f_b: 'Forward',
    position: 'PRP',
    age: 27,
    height: 189,
    image:
      'https://www.seaeagles.com.au/remote.axd?https://rugbyimages.statsperform.com/Player%20Bodyshots/111/2022/500002/Aloiai%2CJ-NRL-H-GP008-COPY-body-shot.png?center=0.5%2C0.5&preset=player-profile-small',
  },
  {
    name: 'Lachlan Croker',
    sydney: true,
    team: 'MAN',
    f_b: 'Forward',
    position: 'HOK',
    age: 25,
    height: 180,
    image:
      'https://www.seaeagles.com.au/remote.axd?https://rugbyimages.statsperform.com/Player%20Bodyshots/111/2022/500002/Croker%2CL-NRL-H-GP007-COPY-body-shot.png?center=0.5%2C0.5&preset=player-profile-small',
  },
  {
    name: 'Taniela Paseka',
    sydney: true,
    team: 'MAN',
    f_b: 'Forward',
    position: 'PRP',
    age: 25,
    height: 197,
    image:
      'https://www.seaeagles.com.au/remote.axd?https://rugbyimages.statsperform.com/Player%20Bodyshots/111/2022/500002/Paseka%2CT-NRL-H-GP006-COPY-body-shot.png?center=0.5%2C0.5&preset=player-profile-small',
  },
  {
    name: "Haumole Olakau'atu",
    sydney: true,
    team: 'MAN',
    f_b: 'Forward',
    position: '2RF',
    age: 24,
    height: 196,
    image:
      'https://www.seaeagles.com.au/remote.axd?https://rugbyimages.statsperform.com/Player%20Bodyshots/111/2022/500002/Olakauatu%2CH--NRL-H-GP007-COPY-body-shot.png?center=0.5%2C0.5&preset=player-profile-small',
  },
  {
    name: 'Ben Trbojevic',
    sydney: true,
    team: 'MAN',
    f_b: 'Forward',
    position: '2RF',
    age: 21,
    height: 193,
    image:
      'https://www.seaeagles.com.au/remote.axd?https://rugbyimages.statsperform.com/Player%20Bodyshots/111/2022/500002/Trbojevic%2CB-NRL-H-GP007-COPY-body-shot.png?center=0.5%2C0.5&preset=player-profile-small',
  },
  {
    name: 'Jake Trbojevic',
    sydney: true,
    team: 'MAN',
    f_b: 'Forward',
    position: '2RF',
    age: 28,
    height: 185,
    image:
      'https://www.seaeagles.com.au/remote.axd?https://rugbyimages.statsperform.com/Player%20Bodyshots/111/2022/500002/Trbojevic%2CJ-NRL-H-GP010-COPY-body-shot.png?center=0.5%2C0.5&preset=player-profile-small',
  },
  {
    name: 'Nathan Cleary',
    sydney: true,
    team: 'PEN',
    f_b: 'Back',
    position: 'HLF',
    age: 25,
    height: 182,
    image:
      'https://www.penrithpanthers.com.au/remote.axd?https://rugbyimages.statsperform.com/Player%20Bodyshots/111/2022/500014/Cleary%2CN-NRL-H-GP010-body-shot.png?center=0.5%2C0.5&preset=player-profile-small',
  },
  {
    name: 'Cameron Murray',
    sydney: true,
    team: 'SOU',
    f_b: 'Forward',
    position: '2RF',
    age: 24,
    height: 184,
    image:
      'https://www.rabbitohs.com.au/remote.axd?https://rugbyimages.statsperform.com/Player%20Bodyshots/111/2022/500005/MURRAY%2CC-NRL-H-GP0011-COPY-body-shot.png?center=0.5%2C0.5&preset=player-profile-small',
  },
  {
    name: 'Harry Grant',
    sydney: false,
    team: 'MEL',
    f_b: 'Forward',
    position: 'HOK',
    age: 24,
    height: 177,
    image:
      'https://www.melbournestorm.com.au/remote.axd?https://rugbyimages.statsperform.com/Player%20Bodyshots/111/2022/500021/Harry_Grant_0670-body-shot.png?center=0.5%2C0.5&preset=player-profile-small',
  },
  {
    name: 'Joseph Manu',
    sydney: true,
    team: 'SYD',
    f_b: 'Back',
    position: 'CTR',
    age: 26,
    height: 192,
    image:
      'https://www.roosters.com.au/remote.axd?https://rugbyimages.statsperform.com/Player%20Bodyshots/111/2022/500001/Manu%2CJ-NRL-H-GP010-COPY-body-shot.png?center=0.5%2C0.5&preset=player-profile-small',
  },
];

const playersJSONed = JSON.stringify(players);

// console.log(playersJSONed);
export default players;
