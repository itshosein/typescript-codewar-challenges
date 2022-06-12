type IBookCatData = {
  cat: string;
  amount: number;
}[];

export class BookSeller {
  public static stockList = (listOfArt: string[], listOfCat: string[]) => {
    let bookCatObj: IBookCatData = [];
    listOfArt.forEach((art) => {
      bookCatObj.push({
        amount: parseInt(art.split(" ")[1]),
        cat: art.split(" ")[0],
      });
    });
    const bookSeller = new BookSeller(bookCatObj);
    console.log("bookSeller" ,bookSeller);
    
  };

  /**
   *
   */
  constructor(private _bookCatData: IBookCatData) {}
}
