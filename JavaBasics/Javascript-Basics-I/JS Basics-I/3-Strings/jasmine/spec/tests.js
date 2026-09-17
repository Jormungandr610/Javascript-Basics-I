const recite = (poem, responseFn) => poem.map((line) => responseFn(line));

describe('front door response', () => {
  it('should take the first characters from SUMMER', () => {
    // Summer, by John Albert Caballero
    const SUMMER = [
      'Sunshine warming my toes,',
      'Underwater fun with my friends.',
      'Making homemade ice cream on the porch,',
      'Many long nights catching fireflies.',
      'Early morning walks to the creek,',
      'Reveling in the freedom of lazy days.',
    ];

    const expectedLetters = ['S', 'U', 'M', 'M', 'E', 'R'];
    expect(recite(SUMMER, frontDoorResponse)).toEqual(expectedLetters);
  });

  it('should take the first characters from SOPHIA', () => {
    // Sophia, by John Albert Caballero
    const SOPHIA = [
      'Serene, calming quality',
      'Organized, you always have it together',
      'Picturesque, strikingly beautiful',
      'Honest, so genuine',
      'Imaginative, a creative mind',
      'Alluring, so attractive',
    ];

    const expectedLetters = ['S', 'O', 'P', 'H', 'I', 'A'];
    expect(recite(SOPHIA, frontDoorResponse)).toEqual(expectedLetters);
  });

  it('should take the first characters from CODE', () => {
    // Code Work, by Derk-Jan Karrenbeld
    const CODE_WORK = [
      'Compilers intensily bestow',
      'On commencing without ego',
      'Different processes ajar',
      'Exit with zero quick',
    ];

    const expectedLetters = ['C', 'O', 'D', 'E'];
    expect(recite(CODE_WORK, frontDoorResponse)).toEqual(expectedLetters);
  });
});

describe('front door password', () => {
  it('should capitalize SUMMER', () => {
    expect(frontDoorPassword('SUMMER')).toBe('Summer');
  });

  it('should capitalize sophia', () => {
    expect(frontDoorPassword('sophia')).toBe('Sophia');
  });

  it('should capitalize Code', () => {
    expect(frontDoorPassword('Code')).toBe('Code');
  });
});

describe('back door response', () => {
  it('should take the last letter character of each line of CODE_WORK', () => {
    // Code Work, by Derk-Jan Karrenbeld
    const CODE_WORK = [
      'Compilers intensily bestow',
      'On commencing without ego',
      'Different processes ajar',
      'Exit with zero quick',
    ];

    const actualLetters = recite(CODE_WORK, backDoorResponse);
    const expectedLetters = ['w', 'o', 'r', 'k'];
    expect(actualLetters).toEqual(expectedLetters);
  });

  it('should ignore whitespace when taking the last letter character of each line of SHIRE_HORSE_WITH_SPACES', () => {
    // Shire Horse, by Michael Lockwood
    // with trailing whitespace
    const SHIRE_HORSE_WITH_SPACES = [
      'Stands so high   ',
      '\tHuge hooves too\t',
      'Impatiently waits for \t \t',
      '    Reins and harness    ',
      'Eager to leave\n\n',
    ];

    const actualLetters = recite(SHIRE_HORSE_WITH_SPACES, backDoorResponse);
    const expectedLetters = ['h', 'o', 'r', 's', 'e'];
    expect(actualLetters).toEqual(expectedLetters);
  });
});

describe('back door password', () => {
  it("should generate the correct pass phrase from 'work'", () => {
    expect(backDoorPassword('work')).toBe('Work, please');
  });

  it("should generate the correct pass phrase from 'horse'", () => {
    expect(backDoorPassword('horse')).toBe('Horse, please');
  });
});