console.log("veikiu")
// Sukurkite klasę, skirtą darbui su spalvomis, pagrindinių spalvos kodų gavimui norimais formatais bei dviejų spalvų sujungimui. klasė Color turės:

// privačius laukus:
// red, green, blue; - (sveikųjų skaičių reikšmės nuo 0 iki 255);

// Konstruktorių: sukuriamas objektas iš RGB reikšmių; Jei bent viena paduodama reikšmė yra didesnė nei 255 arba mažesnė nei 0, išmesti error pasinaudojant: 
// throw new Error(‘Blogos reikšmės’);

// Geterius:
// a. rgb - gražinantis RGB spalvos kodą, kaip string reikšmę
// b. hsl - gražinantis HSL spalvos kodą, kaip string reikšmę
// c. hex - gražinantis HEX spalvos kodą, kaip string reikšmę

// Sukurti klasę ColorPalette, kuri turi:

// Statinius geterius, grąžinsiančius Color Objektą:
// WHITE
// BLACK
// BROWN
// PINK
// RED
// ORANGE
// YELLOW
// GREEN
// CYAN
// BLUE
// PURPLE


// Statinį metodą, kuris sujungia dvi spalvas - gražina Color objektą

class Color {
  #red;
  #green;
  #blue;
    constructor(red, green, blue) {
      if (
        red < 0 || red > 255 ||
        green < 0 || green > 255 ||
        blue < 0 || blue > 255
      ) {
        throw new Error('Blogos reikšmės');
      }
  
      this.red = red;
      this.green = green;
      this.blue = blue;
    }
  
    get rgb() {
      return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }
  
  }
  class ColorPalette {
    static get WHITE() {
      return new Color(255, 255, 255);
    }
  
    static get BLACK() {
      return new Color(0, 0, 0);
    }
  
    static get BROWN() {
      return new Color(165, 42, 42);
    }
  
    static get PINK() {
      return new Color(255, 192, 203);
    }
  
    static get RED() {
      return new Color(255, 0, 0);
    }
  
    static get ORANGE() {
      return new Color(255, 165, 0);
    }
  
    static get YELLOW() {
      return new Color(255, 255, 0);
    }
  
    static get GREEN() {
      return new Color(0, 128, 0);
    }
  
    static get CYAN() {
      return new Color(0, 255, 255);
    }
  
    static get BLUE() {
      return new Color(0, 0, 255);
    }
  
    static get PURPLE() {
      return new Color(128, 0, 128);
    }
  }
  
  // Pavyzdiniai naudojimo atvejai:
  const color1 = new Color(255, 0, 0);
  const color2 = new Color(0, 0, 255);
  
  console.log(Color.combineColors(color1, color2).rgb);
  console.log(ColorPalette.RED.rgb);