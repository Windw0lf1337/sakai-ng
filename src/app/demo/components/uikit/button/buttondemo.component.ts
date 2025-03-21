import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import designTokens from '../../../../../assets/theme/cb-dark/design-token.json';

@Component({
    templateUrl: './buttondemo.component.html'
})
export class ButtonDemoComponent implements OnInit {

    items: MenuItem[] = [];

    loading = [false, false, false, false];

    ngOnInit() {
        this.items = [
            { label: 'Update', icon: 'pi pi-refresh' },
            { label: 'Delete', icon: 'pi pi-times' },
            { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
            { separator: true },
            { label: 'Setup', icon: 'pi pi-cog' }
        ];        
    }

    load(index: number) {
        this.loading[index] = true;
        setTimeout(() => this.loading[index] = false, 1000);
    }

    parse_json() {
        console.log(designTokens);
        var tokensLength = console.log(Object.keys(designTokens.global.button).length)
        
        for (let i = 0; i < tokensLength; i++) {
            const element = array[i];
            
        }

    }
}
