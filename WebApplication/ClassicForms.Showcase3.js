/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2019
 * @compiler Bridge.NET 17.9.0
 */
Bridge.assembly("ClassicForms.Showcase3", function ($asm, globals) {
    "use strict";

    Bridge.define("ClassicForms.Showcase3.Program", {
        main: function Main () {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                $returnValue, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    System.Settings.UseNameForInputPlaceholders = true;

                                    $task1 = System.Windows.Forms.Form.LoadResourcesAsync($asm);
                                    $step = 1;
                                    if ($task1.isCompleted()) {
                                        continue;
                                    }
                                    $task1.continue($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
                                    new ClassicForms.Showcase3.UI.frmImage().Show();
                                    $tcs.setResult(null);
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);

            $asyncBody();
            return $tcs.task;
        }
    });

    Bridge.define("ClassicForms.Showcase3.UI.frmImage", {
        inherits: [System.Windows.Forms.Form],
        fields: {
            /**
             * Required designer variable.
             *
             * @instance
             * @private
             * @memberof ClassicForms.Showcase3.UI.frmImage
             * @type System.ComponentModel.IContainer
             */
            components: null,
            pictureBox1: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Form.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            /**
             * Clean up any resources being used.
             *
             * @instance
             * @protected
             * @override
             * @this ClassicForms.Showcase3.UI.frmImage
             * @memberof ClassicForms.Showcase3.UI.frmImage
             * @param   {boolean}    disposing    true if managed resources should be disposed; otherwise, false.
             * @return  {void}
             */
            Dispose$1: function (disposing) {
                if (disposing && (this.components != null)) {
                    this.components.System$IDisposable$Dispose();
                }
                System.Windows.Forms.Form.prototype.Dispose$1.call(this, disposing);
            },
            /**
             * Required method for Designer support - do not modify
             the contents of this method with the code editor.
             *
             * @instance
             * @private
             * @this ClassicForms.Showcase3.UI.frmImage
             * @memberof ClassicForms.Showcase3.UI.frmImage
             * @return  {void}
             */
            InitializeComponent: function () {
                var resources = new System.ComponentModel.ComponentResourceManager(ClassicForms.Showcase3.UI.frmImage);
                this.pictureBox1 = new System.Windows.Forms.PictureBox();
                Bridge.cast((this.pictureBox1), System.ComponentModel.ISupportInitialize).System$ComponentModel$ISupportInitialize$BeginInit();
                this.SuspendLayout();
                this.pictureBox1.Anchor = ((15));
                this.pictureBox1.BackgroundImage = System.Drawing.Image.op_Explicit((resources.GetObject("pictureBox1.BackgroundImage")));
                this.pictureBox1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
                this.pictureBox1.Location = new System.Drawing.Point.$ctor1(12, 12);
                this.pictureBox1.Name = "pictureBox1";
                this.pictureBox1.Size = new System.Drawing.Size.$ctor2(467, 334);
                this.pictureBox1.TabIndex = 0;
                this.pictureBox1.TabStop = false;
                this.AutoScaleDimensions = new System.Drawing.SizeF.$ctor3(6.0, 13.0);
                this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
                this.ClientSize = new System.Drawing.Size.$ctor2(491, 358);
                this.Controls.add(this.pictureBox1);
                this.Name = "frmImage";
                this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
                this.Text = "frmImage";
                Bridge.cast((this.pictureBox1), System.ComponentModel.ISupportInitialize).System$ComponentModel$ISupportInitialize$EndInit();
                this.ResumeLayout$1(false);

            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDbGFzc2ljRm9ybXMuU2hvd2Nhc2UzLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJQcm9ncmFtLmNzIiwiLi4vQ2xhc3NpY0Zvcm1zLlNob3djYXNlMy5VSS9mcm1JbWFnZS5EZXNpZ25lci5jcyIsIi4uL0NsYXNzaWNGb3Jtcy5TaG93Y2FzZTMuVUkvZnJtSW1hZ2UuY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBZ0JZQTs7b0NBRUFBLFNBQU1BLDZDQUF3QkE7Ozs7Ozs7Ozs7b0NBRTlCQSxJQUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JDYjhDQTs7Ozs7OztnQkNDbERBOzs7Ozs7Ozs7Ozs7Ozs7aUNESzRCQTtnQkFFNUJBLElBQUlBLGFBQWFBLENBQUNBLG1CQUFjQTtvQkFFNUJBOztnQkFFSkEseURBQWFBOzs7Ozs7Ozs7Ozs7O2dCQVdiQSxnQkFBMkRBLElBQUlBLCtDQUErQ0EsQUFBT0E7Z0JBQ3JIQSxtQkFBbUJBLElBQUlBO2dCQUN2QkEsQUFBQ0EsWUFBMENBLENBQUNBO2dCQUM1Q0E7Z0JBSUFBLDBCQUEwQkEsQ0FBQ0EsQUFBbUNBLEFBQUNBLENBQUNBO2dCQUdoRUEsbUNBQW1DQSxBQUFDQSxpQ0FBc0JBLENBQUNBO2dCQUMzREEseUNBQXlDQTtnQkFDekNBLDRCQUE0QkEsSUFBSUE7Z0JBQ2hDQTtnQkFDQUEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQTtnQkFJQUEsMkJBQTJCQSxJQUFJQTtnQkFDL0JBLHFCQUFxQkE7Z0JBQ3JCQSxrQkFBa0JBLElBQUlBO2dCQUN0QkEsa0JBQWtCQTtnQkFDbEJBO2dCQUNBQSxxQkFBcUJBO2dCQUNyQkE7Z0JBQ0FBLEFBQUNBLFlBQTBDQSxDQUFDQTtnQkFDNUNBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIENsYXNzaWNGb3Jtcy5TaG93Y2FzZTMuVUk7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uUmVmbGVjdGlvbjtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Gb3JtcztcclxuXHJcbm5hbWVzcGFjZSBDbGFzc2ljRm9ybXMuU2hvd2Nhc2UzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBQcm9ncmFtXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFzeW5jIHN0YXRpYyBUYXNrIE1haW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2V0dGluZ3MuVXNlTmFtZUZvcklucHV0UGxhY2Vob2xkZXJzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IEZvcm0uTG9hZFJlc291cmNlc0FzeW5jKEFzc2VtYmx5LkdldEV4ZWN1dGluZ0Fzc2VtYmx5KCkpO1xyXG5cclxuICAgICAgICAgICAgbmV3IGZybUltYWdlKCkuU2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgQ2xhc3NpY0Zvcm1zLlNob3djYXNlMy5VSVxyXG57XHJcbiAgICBwYXJ0aWFsIGNsYXNzIGZybUltYWdlXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBSZXF1aXJlZCBkZXNpZ25lciB2YXJpYWJsZS5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbXBvbmVudE1vZGVsLklDb250YWluZXIgY29tcG9uZW50cyA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ2xlYW4gdXAgYW55IHJlc291cmNlcyBiZWluZyB1c2VkLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwiZGlzcG9zaW5nXCI+dHJ1ZSBpZiBtYW5hZ2VkIHJlc291cmNlcyBzaG91bGQgYmUgZGlzcG9zZWQ7IG90aGVyd2lzZSwgZmFsc2UuPC9wYXJhbT5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBEaXNwb3NlKGJvb2wgZGlzcG9zaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGRpc3Bvc2luZyAmJiAoY29tcG9uZW50cyAhPSBudWxsKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5EaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmFzZS5EaXNwb3NlKGRpc3Bvc2luZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjcmVnaW9uIFdpbmRvd3MgRm9ybSBEZXNpZ25lciBnZW5lcmF0ZWQgY29kZVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFJlcXVpcmVkIG1ldGhvZCBmb3IgRGVzaWduZXIgc3VwcG9ydCAtIGRvIG5vdCBtb2RpZnlcclxuICAgICAgICAvLy8gdGhlIGNvbnRlbnRzIG9mIHRoaXMgbWV0aG9kIHdpdGggdGhlIGNvZGUgZWRpdG9yLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEluaXRpYWxpemVDb21wb25lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU3lzdGVtLkNvbXBvbmVudE1vZGVsLkNvbXBvbmVudFJlc291cmNlTWFuYWdlciByZXNvdXJjZXMgPSBuZXcgU3lzdGVtLkNvbXBvbmVudE1vZGVsLkNvbXBvbmVudFJlc291cmNlTWFuYWdlcih0eXBlb2YoZnJtSW1hZ2UpKTtcclxuICAgICAgICAgICAgdGhpcy5waWN0dXJlQm94MSA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5QaWN0dXJlQm94KCk7XHJcbiAgICAgICAgICAgICgoU3lzdGVtLkNvbXBvbmVudE1vZGVsLklTdXBwb3J0SW5pdGlhbGl6ZSkodGhpcy5waWN0dXJlQm94MSkpLkJlZ2luSW5pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLlN1c3BlbmRMYXlvdXQoKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIHBpY3R1cmVCb3gxXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLnBpY3R1cmVCb3gxLkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuVG9wIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkJvdHRvbSkgXHJcbiAgICAgICAgICAgIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkxlZnQpIFxyXG4gICAgICAgICAgICB8IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5SaWdodCkpKTtcclxuICAgICAgICAgICAgdGhpcy5waWN0dXJlQm94MS5CYWNrZ3JvdW5kSW1hZ2UgPSAoKFN5c3RlbS5EcmF3aW5nLkltYWdlKShyZXNvdXJjZXMuR2V0T2JqZWN0KFwicGljdHVyZUJveDEuQmFja2dyb3VuZEltYWdlXCIpKSk7XHJcbiAgICAgICAgICAgIHRoaXMucGljdHVyZUJveDEuQmFja2dyb3VuZEltYWdlTGF5b3V0ID0gU3lzdGVtLldpbmRvd3MuRm9ybXMuSW1hZ2VMYXlvdXQuU3RyZXRjaDtcclxuICAgICAgICAgICAgdGhpcy5waWN0dXJlQm94MS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxMiwgMTIpO1xyXG4gICAgICAgICAgICB0aGlzLnBpY3R1cmVCb3gxLk5hbWUgPSBcInBpY3R1cmVCb3gxXCI7XHJcbiAgICAgICAgICAgIHRoaXMucGljdHVyZUJveDEuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDQ2NywgMzM0KTtcclxuICAgICAgICAgICAgdGhpcy5waWN0dXJlQm94MS5UYWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucGljdHVyZUJveDEuVGFiU3RvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gZnJtSW1hZ2VcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuQXV0b1NjYWxlRGltZW5zaW9ucyA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplRig2RiwgMTNGKTtcclxuICAgICAgICAgICAgdGhpcy5BdXRvU2NhbGVNb2RlID0gU3lzdGVtLldpbmRvd3MuRm9ybXMuQXV0b1NjYWxlTW9kZS5Gb250O1xyXG4gICAgICAgICAgICB0aGlzLkNsaWVudFNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg0OTEsIDM1OCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMucGljdHVyZUJveDEpO1xyXG4gICAgICAgICAgICB0aGlzLk5hbWUgPSBcImZybUltYWdlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuU3RhcnRQb3NpdGlvbiA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkZvcm1TdGFydFBvc2l0aW9uLkNlbnRlclNjcmVlbjtcclxuICAgICAgICAgICAgdGhpcy5UZXh0ID0gXCJmcm1JbWFnZVwiO1xyXG4gICAgICAgICAgICAoKFN5c3RlbS5Db21wb25lbnRNb2RlbC5JU3VwcG9ydEluaXRpYWxpemUpKHRoaXMucGljdHVyZUJveDEpKS5FbmRJbml0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lTGF5b3V0KGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZW5kcmVnaW9uXHJcblxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuUGljdHVyZUJveCBwaWN0dXJlQm94MTtcclxuICAgIH1cclxufSIsInVzaW5nIFN5c3RlbS5XaW5kb3dzLkZvcm1zO1xyXG5cclxubmFtZXNwYWNlIENsYXNzaWNGb3Jtcy5TaG93Y2FzZTMuVUlcclxue1xyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgZnJtSW1hZ2UgOiBGb3JtXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGZybUltYWdlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0KfQo=
