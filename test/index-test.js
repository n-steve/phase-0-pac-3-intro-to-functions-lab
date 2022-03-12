
describe('shout(string)', function () {
  it('receives one argument and returns it in all caps', function () {
    expect(shout('hello')).toEqual('HELLO');
  })
})

describe('whisper(string)', function () {
  it('receives one argument and returns it in all lowercase', function () {
    expect(whisper('HELLO')).toEqual('hello');
  })
})

describe('logShout(string)', function () {
  it('takes a string argument and logs it in all caps using console.log()', function () {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('hello');

    expect(spy).toHaveBeenCalledWith('HELLO');

    console.log.restore();
  })
})

describe('logWhisper(string)', function () {
  it('takes a string argument and logs it in all lowercase using console.log()', function () {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  })
})

describe('sayHiToHeadphonedRoommate(string)', function () {
  it('returns "I can\'t hear you!" if `string` is lowercase', function () {
    expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
  })

  it('returns "YES INDEED!" if `string` is uppercase', function () {
    expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
  })

  it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
      "I would love to!"
    );
  });
})

function shout(string) {
  return string.toUpperCase();
}


function whisper(string) {
  return string.toLowerCase();
}

//function logShout(string) {
//console.log(string.toUpperCase(string));
//}
//function logWhisper(string) {
//console.log(string.toLowerCase(string));
//}

function logShout(string) {
  console.log(shout(string));//we used the function shout above to recall in this log function. 
}
function logWhisper(string) {
  console.log(whisper(string));
}


function sayHiToHeadphonedRoommate(string) {
  if (string == whisper(string)) {
    return "I can't hear you!";
  } else if (string == shout(string)) {
    return "YES INDEED!";
  } else if (string == "Let's have dinner together!") {
    return "I would love to!";
  }
}

