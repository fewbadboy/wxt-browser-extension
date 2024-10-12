export default {
  name: 'tom'
}

function say(name: string, age: number) {
  const obj = {
    name: 'hi'
  }
  if (age > 20) {
    console.log("成年人", obj.name);
  }
}

say('tom', 18)