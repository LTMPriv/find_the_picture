import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CustomBreakPointsProvider } from 'app/layout/custom-breakpoints';
import { HorizontalLayoutModule } from 'app/layout/horizontal/horizontal-layout.module';

@NgModule({
  imports: [FlexLayoutModule.withConfig({ disableDefaultBps: true }), HorizontalLayoutModule],
  providers: [CustomBreakPointsProvider],
  exports: [HorizontalLayoutModule]
})
export class LayoutModule {}
