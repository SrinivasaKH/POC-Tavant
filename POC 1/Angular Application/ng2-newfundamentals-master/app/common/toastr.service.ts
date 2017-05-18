import { OpaqueToken } from '@angular/core'
//declare let toastr: any
export let TOASTR_TOKEN = new OpaqueToken('toastr')
// @Injectable()
// export class ToastrService {
//     success(message: string, title?: string) {
//         toastr.success(message, title)
//     }
//     info(message: string, title?: string) {
//         toastr.success(message, title)
//     }
//     warnning(message: string, title?: string) {
//         toastr.success(message, title)
//     }
//     error(message: string, title?: string) {
//         toastr.success(message, title)
//     }
//}

export interface Toastr{
    success(message: string, title?: string):void;
    info(message: string, title?: string): void;
    warnning(message: string, title?: string):void;
    error(message: string, title?: string):void;
    
}