import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'markdown'})
export class MarkdownPipe implements PipeTransform {
  transform(content: string): any {
   // return marked(content, { sanitize: true });
  }
}
