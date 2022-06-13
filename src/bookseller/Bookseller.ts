type IBooksCatData = {
  cat: string;
  amount: number;
}[];

type IBookData = {
  cat: string;
  amount: number;
};

export class BookSeller {
  private _booksCatData: IBooksCatData = [];

  public static stockList = (
    listOfArt: string[],
    listOfCat: string[]
  ): string => {
    if (!listOfArt.length || !listOfCat.length) {
      return "";
    }
    const bookSeller = new BookSeller(listOfArt);
    return bookSeller.findCats(listOfCat);
  };

  constructor(books: string[]) {
    let booksDataTemp: IBooksCatData = [];
    books.forEach((book) => {
      let bookData = this.convertBookStringToDataObj(book, booksDataTemp);
      if (bookData) {
        booksDataTemp.push(bookData);
      }
    });
    this.booksCatData = booksDataTemp;
  }

  private convertBookStringToDataObj(
    book: string,
    booksData: IBooksCatData
  ): IBookData | undefined {
    const bookData = book.split(" ");
    let bookDataTmp: IBookData | undefined = undefined;

    // checking for valid book string
    if (bookData.length === 2 && parseInt(bookData[1]) !== NaN) {
      bookDataTmp = {
        amount: parseInt(bookData[1]),
        cat: bookData[0][0].toLowerCase(),
      };
      //finding same cat
      let sameBookIndex = booksData.findIndex(
        (book) => book.cat === bookDataTmp?.cat
      );
      // adding amount to same cat found in booksData array
      if (sameBookIndex !== -1) {
        booksData[sameBookIndex].amount += bookDataTmp.amount;
        bookDataTmp = undefined;
      }
    } else {
      throw new Error(
        'Books List is not correct pls provide string array of "BOOK 20" '
      );
    }
    return bookDataTmp;
  }

  private findCats(listOfCat: string[]): string {
    let result = "";
    listOfCat.forEach((cat, index, arr) => {
      let bookCat = this.booksCatData.filter(
        (book) => book.cat === cat.toLowerCase()
      )[0];
      result += `(${cat} : ${bookCat ? bookCat.amount : 0})`;
      if (index !== arr.length - 1) {
        result += " - ";
      }
    });

    return result;
  }

  private set booksCatData(booksData: IBooksCatData) {
    this._booksCatData = booksData;
  }

  private get booksCatData(): IBooksCatData {
    return this._booksCatData;
  }
}
