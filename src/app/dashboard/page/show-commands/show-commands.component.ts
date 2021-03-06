import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Command } from 'src/app/models/command';
import { CommandsService } from 'src/app/services/commands.service';

@Component({
  selector: 'app-show-commands',
  templateUrl: './show-commands.component.html',
  styleUrls: ['./show-commands.component.css']
})
export class ShowCommandsComponent implements OnInit {
  commands :Command[]=[]
  constructor(
    private comServ:CommandsService,
    private toast:HotToastService
    ){}
  ngOnInit(): void {
    this.getCommands();
  }
  getCommands(){
    this.comServ.getCommands().subscribe(result => {
      this.commands = result.map((e : any) => {
        const command = e.payload.doc.data();
        command.id = e.payload.doc.id;
        return command
      })
    })
  }
}
  
