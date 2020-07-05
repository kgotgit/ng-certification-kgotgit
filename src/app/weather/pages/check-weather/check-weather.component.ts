import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { ZipWeatherService } from "../../../services/zip-weather.serivice";
import { ZipWeatherDtlsIntrfc } from "../../../models/zip-weather.interface";
import { map } from "rxjs/operators";
import {
  LocalStorageService,
  StorageKeys
} from "../../../services/local-storage.service";

@Component({
  selector: "check-weather",
  templateUrl: "./check-weather.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckWeatherComponent implements OnInit, OnDestroy {
  zipMap: Map<string, ZipWeatherDtlsIntrfc> = new Map<
    string,
    ZipWeatherDtlsIntrfc
  >();
  units: "metric" | "imperial" = "imperial";

  constructor(
    private zipWeatherService: ZipWeatherService,
    private localStorageSerivce: LocalStorageService,
    private changeDetectionRef: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.loadFromStorage();
  }

  

  /**
   * Load already added zip codes from local storage
   */
  loadFromStorage() {
    let zips = this.localStorageSerivce.getItemFromLocalStorage(
      StorageKeys.ZIP
    );
    if (zips && Array.isArray(zips)) {
      zips.forEach(zip => {
        this.fetchAndAdd(zip);
      });
    }
  }

  /**
   * Listen to child componet for new added zip codes and make service call, upon success add to local storage.
   */
  onZipAdded(zip: string) {
    if (zip && !this.zipMap.has(zip)) {
      this.fetchAndAdd(zip);
    }
  }

  /**
   * Invoke service to fetch weather details for given zip
   */
  fetchAndAdd(zip) {
    this.zipWeatherService
      .fetchWeatherInfoForZip(zip, this.units)
      .pipe(
        map((data: ZipWeatherDtlsIntrfc) => {
          this.zipMap.set(zip, data);
          this.addZipToLocalStorage(zip);
          this.changeDetectionRef.detectChanges();
        })
      )
      .subscribe();
  }

  /**
   * Adds the zip code to a new/existing array  and stores into into local stoarge.
   */
  addZipToLocalStorage(zip: string) {
    let zips = this.localStorageSerivce.getItemFromLocalStorage(
      StorageKeys.ZIP
    );
    zips = zips && Array.isArray(zips) ? zips : (new Array() as string[]);
    if (zips.indexOf(zip) < 0) {
      zips.push(zip);
      this.localStorageSerivce.setToLocalStorage(zips, StorageKeys.ZIP);
    }
  }

  /**
   * Removes zip from the local storage
   */
  removeZipFromLocalStorage(zip: string) {
    let zips = this.localStorageSerivce.getItemFromLocalStorage(
      StorageKeys.ZIP
    );
    if (zips && Array.isArray(zips)) {
      zips = zips.filter(z => z != zip);
      this.localStorageSerivce.setToLocalStorage(zips, StorageKeys.ZIP);
    }
  }

  /**
   * on deleting zip location
   */
  onDelete(zip: string) {
    if (this.zipMap) {
      this.zipMap.delete(zip);
    }
    this.removeZipFromLocalStorage(zip);
  }

/**
 * Complete and close any subscriptions found.
 */
  ngOnDestroy() {}
}
