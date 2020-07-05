import { Injectable } from "@angular/core";

export enum StorageKeys {
  ZIP = "ZIP"
}

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  constructor() {}

  /**
   * Add to local storage
   */
  setToLocalStorage(data: any, key: StorageKeys) {
    //ensure localStorage object is available
    if (typeof localStorage != "undefined") {
      //convert the input data into json stringif
      let json: string = JSON.stringify(data);

      //convert to base64 and store into the local storage
      localStorage.setItem(key, btoa(json));
      console;
    }
  }

  /**
   * get item from local storage
   */
  getItemFromLocalStorage(key: StorageKeys) {
    let item = null;
    //ensure localStorage object is available
    if (typeof localStorage != "undefined") {
      //get item from lcaol storage
      let json = localStorage.getItem(key);
      //check json string is not null or undefined .i.e., item exists in the store
      if (json != null && typeof json != "undefined") {
        //decode base64 string and parse the json string to json.
        item = JSON.parse(atob(json));
      }
    }
    return item;
  }
}
