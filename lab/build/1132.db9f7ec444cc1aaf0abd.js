"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1132,6796],{56796:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r,o=n(52884),a=n(18599),l=n(69052),i=n(18349),s=n(51384),c=n(74267),d=n(77994),u=n(19473),f=n(74161),C=n(79487),g=n(54893);!function(e){e.runCells="toc:run-cells"}(r||(r={}));const b={id:"@jupyterlab/toc:plugin",autoStart:!0,provides:u.ITableOfContentsRegistry,requires:[a.IDocumentManager,c.IRenderMimeRegistry,f.ITranslator],optional:[l.IEditorTracker,o.ILayoutRestorer,o.ILabShell,i.IMarkdownViewerTracker,s.INotebookTracker,d.ISettingRegistry],activate:async function(e,t,n,o,a,l,i,s,c,d){const f=o.load("jupyterlab"),b=new u.TableOfContents({docmanager:t,rendermime:n,translator:o}),k=new u.TableOfContentsRegistry;let T;if(b.title.icon=C.tocIcon,b.title.caption=f.__("Table of Contents"),b.id="table-of-contents",b.node.setAttribute("role","region"),b.node.setAttribute("aria-label",f.__("Table of Contents section")),e.shell.add(b,"left",{rank:400}),e.commands.addCommand(r.runCells,{execute:e=>{if(!c)return null;const t=c.currentWidget;if(null==t)return;const n=t.content.widgets;if(void 0===n)return;const r=b.activeEntry.cellRef;if(r instanceof g.MarkdownCell){let e=r.headingInfo.level;for(let o=n.indexOf(r)+1;o<n.length;o++){const r=n[o];if(r instanceof g.MarkdownCell&&r.headingInfo.level<=e)break;r instanceof g.CodeCell&&g.CodeCell.execute(r,t.sessionContext)}}else r instanceof g.CodeCell&&g.CodeCell.execute(r,t.sessionContext)},label:f.__("Run Cell(s)")}),e.contextMenu.addItem({selector:".jp-tocItem",command:r.runCells}),l&&l.add(b,"@jupyterlab/toc:plugin"),d)try{T=await d.load("@jupyterlab/toc-extension:plugin")}catch(e){console.error(`Failed to load settings for the Table of Contents extension.\n\n${e}`)}if(c){const e=(0,u.createNotebookGenerator)(c,b,n.sanitizer,o,T);k.add(e)}if(a){const e=(0,u.createMarkdownGenerator)(a,b,n.sanitizer,o,T);k.add(e);const t=(0,u.createLatexGenerator)(a);k.add(t);const r=(0,u.createPythonGenerator)(a);k.add(r)}if(s){const e=(0,u.createRenderedMarkdownGenerator)(s,b,n.sanitizer,o,T);k.add(e)}return i&&i.currentChanged.connect((function(){let t=e.shell.currentWidget;if(!t)return;let n=k.find(t);n?b.current={widget:t,generator:n}:b.current&&b.current.widget.isDisposed&&(b.current=null)})),k}}}}]);
//# sourceMappingURL=1132.db9f7ec444cc1aaf0abd.js.map