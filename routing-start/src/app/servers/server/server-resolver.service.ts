import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ServersService } from '../servers.service';

@Injectable({
  providedIn: 'root'
})

interface Server {
  id: number;
  name: string;
  status: string;
}

export class ServerResolverService implements Resolve<Server> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
      return this.serversService.getServer(+route.params['id']);
    }

  constructor(private serversService: ServersService) { }
}
