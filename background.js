let loginId, oAuth = 0;

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'loading') {
        if (tab.url.substr(0, 'https://nid.naver.com/oauth2.0/'.length) == 'https://nid.naver.com/oauth2.0/') {
            if (oAuth == 0) {
                oAuth = 1;
                chrome.tabs.executeScript(tabId, {
                    code: `window.stop();`,
                    runAt: "document_start"
                });
                chrome.tabs.executeScript(tabId, {
                    code: `document.querySelector('html').innerHTML=\`
<head>
<style>
.material_block
{
  width: 580px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,.4);
  margin: auto;
}

.spinner
{
  -webkit-animation: rotation 1.35s linear infinite;
  animation: rotation 1.35s linear infinite;
}

@-webkit-keyframes rotation
{
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}

@keyframes rotation
{
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}

.circle
{
  stroke-dasharray: 180;
  stroke-dashoffset: 0;
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
  -webkit-animation: turn 1.35s ease-in-out infinite;
  animation: turn 1.35s ease-in-out infinite;
}

@-webkit-keyframes turn
{
  0% {
    stroke-dashoffset: 180;
  }

  50% {
    stroke-dashoffset: 45;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  100% {
    stroke-dashoffset: 180;
    -webkit-transform: rotate(450deg);
    transform: rotate(450deg);
  }
}

@keyframes turn
{
  0% {
    stroke-dashoffset: 180;
  }

  50% {
    stroke-dashoffset: 45;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  100% {
    stroke-dashoffset: 180;
    -webkit-transform: rotate(450deg);
    transform: rotate(450deg);
  }
}
.centered { display: table; margin-left: auto; margin-right: auto; }
.vc {position: absolute;
    top: 50%;
    transform: translateX(-50%)translateY(-50%);
    left: 50%;
} }
</style>
</head>
<body style=\"width:100vw;height:100vh;padding:0;margin:0;background:rgb(3, 207, 93);\">
<div class="centered vc">
<div class="centered">
<svg class="spinner" width="100px" height="100px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" style="stroke:#ffffff;"><circle class="circle" fill="none" stroke-width="4" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg>
</div>
<br>
<br>
<br>
<div>
<svg width="454" height="46" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="hidden"><defs><clipPath id="clip0"><path d="M432 800 886 800 886 846 432 846Z" fill-rule="evenodd" clip-rule="evenodd"/></clipPath></defs><g clip-path="url(#clip0)" transform="translate(-432 -800)"><path d="M476.963 834.733 517.25 834.733 517.25 837.66 476.963 837.66ZM825.833 831.087C824.554 831.087 823.291 831.191 822.044 831.399 820.797 831.607 819.686 831.919 818.711 832.335 817.736 832.751 816.953 833.27 816.361 833.894 815.77 834.518 815.474 835.245 815.474 836.077L815.474 837.084C815.474 837.948 815.77 838.691 816.361 839.315 816.953 839.939 817.736 840.458 818.711 840.874 819.686 841.29 820.797 841.602 822.044 841.81 823.291 842.018 824.554 842.122 825.833 842.122 827.112 842.122 828.375 842.018 829.622 841.81 830.869 841.602 831.98 841.29 832.955 840.874 833.93 840.458 834.714 839.939 835.305 839.315 835.897 838.691 836.193 837.948 836.193 837.084L836.193 836.125C836.193 835.261 835.897 834.518 835.305 833.894 834.714 833.27 833.93 832.751 832.955 832.335 831.98 831.919 830.869 831.607 829.622 831.399 828.375 831.191 827.112 831.087 825.833 831.087ZM757.682 830.224 761.087 830.224 761.087 840.346 786.938 840.346 786.938 843.321 757.682 843.321ZM530.327 828.977 533.732 828.977 533.732 840.346 558.24 840.346 558.24 843.321 530.327 843.321ZM570.693 826.338 599.182 826.338 599.182 836.557 574.242 836.557 574.242 841.21 600.477 841.21 600.477 844.041 570.933 844.041 570.933 833.774 595.872 833.774 595.872 829.168 570.693 829.168ZM751.735 822.692 792.021 822.692 792.021 825.618 751.735 825.618ZM805.69 820.533 845.976 820.533 845.976 823.411 827.512 823.411 827.512 828.305C829.142 828.401 830.677 828.633 832.116 829.001 833.555 829.368 834.818 829.872 835.905 830.512 836.992 831.151 837.855 831.927 838.495 832.839 839.134 833.75 839.454 834.781 839.454 835.933L839.454 837.276C839.454 838.523 839.078 839.627 838.327 840.586 837.575 841.546 836.576 842.353 835.329 843.009 834.082 843.665 832.635 844.16 830.989 844.496 829.342 844.832 827.624 845 825.833 845 824.043 845 822.324 844.832 820.677 844.496 819.031 844.16 817.584 843.665 816.337 843.009 815.09 842.353 814.091 841.546 813.339 840.586 812.588 839.627 812.212 838.523 812.212 837.276L812.212 835.885C812.212 834.733 812.532 833.702 813.172 832.791 813.811 831.879 814.667 831.111 815.738 830.488 816.809 829.864 818.072 829.368 819.526 829.001 820.981 828.633 822.524 828.401 824.155 828.305L824.155 823.411 805.69 823.411ZM880.156 820.389 885 820.389 885 825.187 880.156 825.187ZM867.399 820.389 872.242 820.389 872.242 825.187 867.399 825.187ZM854.641 820.389 859.485 820.389 859.485 825.187 854.641 825.187ZM564.89 819.621 605.177 819.621 605.177 822.5 564.89 822.5ZM720.721 816.023C719.634 816.023 718.65 816.183 717.771 816.503 716.892 816.823 716.14 817.271 715.517 817.846 714.893 818.422 714.414 819.102 714.078 819.885 713.742 820.669 713.575 821.509 713.575 822.404L713.575 824.419C713.575 825.315 713.742 826.154 714.078 826.938 714.414 827.721 714.893 828.401 715.517 828.977 716.14 829.552 716.892 830 717.771 830.32 718.65 830.64 719.634 830.8 720.721 830.8 721.808 830.8 722.791 830.64 723.67 830.32 724.549 830 725.301 829.552 725.924 828.977 726.548 828.401 727.027 827.721 727.363 826.938 727.699 826.154 727.867 825.315 727.867 824.419L727.867 822.404C727.867 821.509 727.699 820.669 727.363 819.885 727.027 819.102 726.548 818.422 725.924 817.846 725.301 817.271 724.549 816.823 723.67 816.503 722.791 816.183 721.808 816.023 720.721 816.023ZM720.721 813.001C722.383 813.001 723.854 813.265 725.133 813.793 726.412 814.32 727.491 815.016 728.37 815.88 729.249 816.743 729.921 817.719 730.385 818.806 730.848 819.893 731.08 820.997 731.08 822.116L731.08 824.707C731.08 825.826 730.848 826.93 730.385 828.017 729.921 829.104 729.249 830.072 728.37 830.919 727.491 831.767 726.412 832.455 725.133 832.982 723.854 833.51 722.383 833.774 720.721 833.774 719.058 833.774 717.587 833.51 716.308 832.982 715.029 832.455 713.95 831.767 713.071 830.919 712.192 830.072 711.52 829.104 711.057 828.017 710.593 826.93 710.361 825.826 710.361 824.707L710.361 822.116C710.361 820.997 710.593 819.893 711.057 818.806 711.52 817.719 712.192 816.743 713.071 815.88 713.95 815.016 715.029 814.32 716.308 813.793 717.587 813.265 719.058 813.001 720.721 813.001ZM533.732 804.941C532.613 804.941 531.59 805.133 530.663 805.517 529.735 805.901 528.944 806.413 528.289 807.052 527.633 807.692 527.122 808.427 526.754 809.259 526.386 810.091 526.202 810.954 526.202 811.85L526.202 814.152C526.202 815.048 526.386 815.912 526.754 816.743 527.122 817.575 527.633 818.31 528.289 818.95 528.944 819.59 529.735 820.101 530.663 820.485 531.59 820.869 532.613 821.061 533.732 821.061 534.851 821.061 535.874 820.869 536.802 820.485 537.729 820.101 538.52 819.59 539.176 818.95 539.831 818.31 540.343 817.575 540.71 816.743 541.078 815.912 541.262 815.048 541.262 814.152L541.262 811.85C541.262 810.954 541.078 810.091 540.71 809.259 540.343 808.427 539.831 807.692 539.176 807.052 538.52 806.413 537.729 805.901 536.802 805.517 535.874 805.133 534.851 804.941 533.732 804.941ZM482.047 804.318 510.919 804.318 510.919 810.075C510.919 814.104 510.775 817.751 510.488 821.013 510.2 824.275 509.752 827.425 509.145 830.464L505.596 830.032C505.915 828.465 506.187 826.954 506.411 825.498 506.635 824.043 506.819 822.588 506.962 821.133 507.106 819.677 507.218 818.19 507.298 816.671 507.378 815.152 507.418 813.545 507.418 811.85L507.418 807.292 482.047 807.292ZM669.611 803.838 698.291 803.838 698.291 806.764 673.016 806.764 673.016 820.677 698.771 820.677 698.771 823.603 685.63 823.603 685.63 834.733 704.094 834.733 704.094 837.66 663.808 837.66 663.808 834.733 682.273 834.733 682.273 823.603 669.611 823.603ZM438.803 803.454 467.196 803.454 467.196 816.455 442.256 816.455 442.256 823.555 468.203 823.555 468.203 826.482 454.822 826.482 454.822 834.733 473.286 834.733 473.286 837.66 433 837.66 433 834.733 451.465 834.733 451.465 826.482 438.947 826.482 438.947 813.577 463.886 813.577 463.886 806.381 438.803 806.381ZM585.034 803.262C583.595 803.262 582.244 803.382 580.981 803.622 579.718 803.862 578.615 804.182 577.672 804.581 576.728 804.981 575.985 805.461 575.441 806.021 574.898 806.58 574.626 807.18 574.626 807.82L574.626 808.971C574.626 809.611 574.898 810.211 575.441 810.77 575.985 811.33 576.728 811.818 577.672 812.234 578.615 812.649 579.718 812.969 580.981 813.193 582.244 813.417 583.595 813.529 585.034 813.529 586.472 813.529 587.823 813.417 589.086 813.193 590.349 812.969 591.452 812.649 592.395 812.234 593.339 811.818 594.082 811.33 594.625 810.77 595.169 810.211 595.441 809.611 595.441 808.971L595.441 807.82C595.441 807.18 595.169 806.58 594.625 806.021 594.082 805.461 593.339 804.981 592.395 804.581 591.452 804.182 590.349 803.862 589.086 803.622 587.823 803.382 586.472 803.262 585.034 803.262ZM631.787 803.166 635.288 803.166 635.288 813.385C635.288 814.312 635.32 815.12 635.384 815.808 635.448 816.495 635.576 817.151 635.767 817.774 635.959 818.398 636.247 819.014 636.631 819.621 637.014 820.229 637.526 820.901 638.165 821.636 639.125 822.756 640.3 824.019 641.69 825.426 643.081 826.834 644.688 828.353 646.51 829.984L644.304 832.287C642.769 830.848 641.355 829.48 640.06 828.185 638.765 826.89 637.638 825.73 636.679 824.707 635.943 823.939 635.28 823.204 634.688 822.5 634.097 821.796 633.737 821.285 633.609 820.965L633.561 820.965C633.529 821.125 633.401 821.373 633.177 821.708 632.954 822.044 632.674 822.42 632.338 822.836 632.002 823.252 631.643 823.691 631.259 824.155 630.875 824.619 630.508 825.043 630.156 825.426 629.74 825.874 629.237 826.402 628.645 827.01 628.054 827.617 627.422 828.257 626.751 828.929 626.079 829.6 625.376 830.288 624.641 830.992 623.905 831.695 623.186 832.351 622.482 832.958L620.228 830.608C621.827 829.2 623.29 827.857 624.617 826.578 625.943 825.298 627.166 824.019 628.286 822.74 629.053 821.876 629.66 821.093 630.108 820.389 630.556 819.685 630.907 818.99 631.163 818.302 631.419 817.615 631.587 816.903 631.667 816.167 631.747 815.432 631.787 814.584 631.787 813.625ZM533.732 801.919C535.363 801.919 536.85 802.199 538.193 802.759 539.535 803.318 540.67 804.054 541.598 804.965 542.525 805.877 543.244 806.908 543.756 808.06 544.267 809.211 544.523 810.378 544.523 811.562L544.523 814.44C544.523 815.624 544.267 816.791 543.756 817.942 543.244 819.094 542.525 820.125 541.598 821.037 540.67 821.948 539.535 822.684 538.193 823.244 536.85 823.803 535.363 824.083 533.732 824.083 532.102 824.083 530.615 823.803 529.272 823.244 527.929 822.684 526.794 821.948 525.867 821.037 524.939 820.125 524.22 819.094 523.709 817.942 523.197 816.791 522.941 815.624 522.941 814.44L522.941 811.562C522.941 810.378 523.197 809.211 523.709 808.06 524.22 806.908 524.939 805.877 525.867 804.965 526.794 804.054 527.929 803.318 529.272 802.759 530.615 802.199 532.102 801.919 533.732 801.919ZM810.966 801.775 840.701 801.775 840.701 804.654 827.512 804.654 827.512 805.853C827.512 806.492 827.584 807.06 827.728 807.556 827.871 808.052 828.135 808.515 828.519 808.947 828.903 809.379 829.414 809.795 830.054 810.195 830.693 810.594 831.508 811.002 832.5 811.418 833.683 811.93 835.145 812.505 836.888 813.145 838.63 813.785 840.509 814.424 842.523 815.064L841.276 817.703C839.294 817.063 837.487 816.439 835.857 815.832 834.226 815.224 832.787 814.648 831.54 814.104 830.038 813.497 828.775 812.897 827.752 812.305 826.728 811.714 826.089 811.162 825.833 810.65L825.785 810.65C825.529 811.194 824.89 811.754 823.867 812.329 822.844 812.905 821.581 813.513 820.078 814.152 818.703 814.728 817.28 815.288 815.809 815.832 814.339 816.375 812.532 817.015 810.39 817.751L809.047 815.112C813.396 813.673 816.737 812.441 819.071 811.418 820.062 811.002 820.877 810.594 821.517 810.195 822.156 809.795 822.668 809.379 823.052 808.947 823.435 808.515 823.707 808.052 823.867 807.556 824.027 807.06 824.107 806.492 824.107 805.853L824.107 804.654 810.966 804.654ZM757.874 801.679 761.279 801.679 761.279 813.625 786.314 813.625 786.314 816.599 757.874 816.599ZM585.034 800.432C586.952 800.432 588.75 800.6 590.429 800.935 592.108 801.271 593.562 801.751 594.793 802.375 596.024 802.998 596.992 803.758 597.695 804.654 598.398 805.549 598.75 806.557 598.75 807.676L598.75 809.115C598.75 810.235 598.398 811.242 597.695 812.137 596.992 813.033 596.024 813.793 594.793 814.416 593.562 815.04 592.108 815.52 590.429 815.856 588.75 816.191 586.952 816.359 585.034 816.359 583.115 816.359 581.317 816.191 579.638 815.856 577.959 815.52 576.505 815.04 575.274 814.416 574.043 813.793 573.075 813.033 572.372 812.137 571.669 811.242 571.317 810.235 571.317 809.115L571.317 807.676C571.317 806.525 571.669 805.501 572.372 804.606 573.075 803.71 574.043 802.95 575.274 802.327 576.505 801.703 577.959 801.231 579.638 800.911 581.317 800.592 583.115 800.432 585.034 800.432ZM719.042 800.24 722.447 800.24 722.447 806.908 733.382 806.908 733.382 809.883 707.963 809.883 707.963 806.908 719.042 806.908ZM738.514 800 741.919 800 741.919 817.942 749.209 817.942 749.209 820.965 741.919 820.965 741.919 843.849 738.514 843.849ZM652.601 800 656.006 800 656.006 843.849 652.601 843.849ZM553.78 800 557.137 800 557.137 831.375 553.78 831.375Z" fill="#FFFFFF" fill-rule="evenodd"/></g></svg>
</div>
</div>
</body>\`;`,
                    runAt: "document_start"
                })
                ;
                window.open("popup/popup.html", "extension_popup", "width=330,height=550,status=no,scrollbars=no,resizable=no");
            }
            return;
        }
        if (tab.url.substr(0, 'https://kauth.kakao.com/oauth/'.length) == 'https://kauth.kakao.com/oauth/') {
            if (oAuth == 0) {
                oAuth = 1;
                chrome.tabs.executeScript(tabId, {
                    code: `window.stop();`,
                    runAt: "document_start"
                });
                chrome.tabs.executeScript(tabId, {
                    code: `document.querySelector('html').innerHTML=\`
<head>
<style>
.material_block
{
  width: 580px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,.4);
  margin: auto;
}

.spinner
{
  -webkit-animation: rotation 1.35s linear infinite;
  animation: rotation 1.35s linear infinite;
}

@-webkit-keyframes rotation
{
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}

@keyframes rotation
{
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}

.circle
{
  stroke-dasharray: 180;
  stroke-dashoffset: 0;
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
  -webkit-animation: turn 1.35s ease-in-out infinite;
  animation: turn 1.35s ease-in-out infinite;
}

@-webkit-keyframes turn
{
  0% {
    stroke-dashoffset: 180;
  }

  50% {
    stroke-dashoffset: 45;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  100% {
    stroke-dashoffset: 180;
    -webkit-transform: rotate(450deg);
    transform: rotate(450deg);
  }
}

@keyframes turn
{
  0% {
    stroke-dashoffset: 180;
  }

  50% {
    stroke-dashoffset: 45;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  100% {
    stroke-dashoffset: 180;
    -webkit-transform: rotate(450deg);
    transform: rotate(450deg);
  }
}
.centered { display: table; margin-left: auto; margin-right: auto; }
.vc {position: absolute;
    top: 50%;
    transform: translateX(-50%)translateY(-50%);
    left: 50%;
} }
</style>
</head>
<body style=\"width:100vw;height:100vh;padding:0;margin:0;background:#F7E600;\">
<div class="centered vc">
<div class="centered">
<svg class="spinner" width="100px" height="100px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" style="stroke:#ffffff;"><circle class="circle" fill="none" stroke-width="4" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg>
</div>
<br>
<br>
<br>
<div>
<svg width="454" height="46" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="hidden"><defs><clipPath id="clip0"><path d="M432 800 886 800 886 846 432 846Z" fill-rule="evenodd" clip-rule="evenodd"/></clipPath></defs><g clip-path="url(#clip0)" transform="translate(-432 -800)"><path d="M476.963 834.733 517.25 834.733 517.25 837.66 476.963 837.66ZM825.833 831.087C824.554 831.087 823.291 831.191 822.044 831.399 820.797 831.607 819.686 831.919 818.711 832.335 817.736 832.751 816.953 833.27 816.361 833.894 815.77 834.518 815.474 835.245 815.474 836.077L815.474 837.084C815.474 837.948 815.77 838.691 816.361 839.315 816.953 839.939 817.736 840.458 818.711 840.874 819.686 841.29 820.797 841.602 822.044 841.81 823.291 842.018 824.554 842.122 825.833 842.122 827.112 842.122 828.375 842.018 829.622 841.81 830.869 841.602 831.98 841.29 832.955 840.874 833.93 840.458 834.714 839.939 835.305 839.315 835.897 838.691 836.193 837.948 836.193 837.084L836.193 836.125C836.193 835.261 835.897 834.518 835.305 833.894 834.714 833.27 833.93 832.751 832.955 832.335 831.98 831.919 830.869 831.607 829.622 831.399 828.375 831.191 827.112 831.087 825.833 831.087ZM757.682 830.224 761.087 830.224 761.087 840.346 786.938 840.346 786.938 843.321 757.682 843.321ZM530.327 828.977 533.732 828.977 533.732 840.346 558.24 840.346 558.24 843.321 530.327 843.321ZM570.693 826.338 599.182 826.338 599.182 836.557 574.242 836.557 574.242 841.21 600.477 841.21 600.477 844.041 570.933 844.041 570.933 833.774 595.872 833.774 595.872 829.168 570.693 829.168ZM751.735 822.692 792.021 822.692 792.021 825.618 751.735 825.618ZM805.69 820.533 845.976 820.533 845.976 823.411 827.512 823.411 827.512 828.305C829.142 828.401 830.677 828.633 832.116 829.001 833.555 829.368 834.818 829.872 835.905 830.512 836.992 831.151 837.855 831.927 838.495 832.839 839.134 833.75 839.454 834.781 839.454 835.933L839.454 837.276C839.454 838.523 839.078 839.627 838.327 840.586 837.575 841.546 836.576 842.353 835.329 843.009 834.082 843.665 832.635 844.16 830.989 844.496 829.342 844.832 827.624 845 825.833 845 824.043 845 822.324 844.832 820.677 844.496 819.031 844.16 817.584 843.665 816.337 843.009 815.09 842.353 814.091 841.546 813.339 840.586 812.588 839.627 812.212 838.523 812.212 837.276L812.212 835.885C812.212 834.733 812.532 833.702 813.172 832.791 813.811 831.879 814.667 831.111 815.738 830.488 816.809 829.864 818.072 829.368 819.526 829.001 820.981 828.633 822.524 828.401 824.155 828.305L824.155 823.411 805.69 823.411ZM880.156 820.389 885 820.389 885 825.187 880.156 825.187ZM867.399 820.389 872.242 820.389 872.242 825.187 867.399 825.187ZM854.641 820.389 859.485 820.389 859.485 825.187 854.641 825.187ZM564.89 819.621 605.177 819.621 605.177 822.5 564.89 822.5ZM720.721 816.023C719.634 816.023 718.65 816.183 717.771 816.503 716.892 816.823 716.14 817.271 715.517 817.846 714.893 818.422 714.414 819.102 714.078 819.885 713.742 820.669 713.575 821.509 713.575 822.404L713.575 824.419C713.575 825.315 713.742 826.154 714.078 826.938 714.414 827.721 714.893 828.401 715.517 828.977 716.14 829.552 716.892 830 717.771 830.32 718.65 830.64 719.634 830.8 720.721 830.8 721.808 830.8 722.791 830.64 723.67 830.32 724.549 830 725.301 829.552 725.924 828.977 726.548 828.401 727.027 827.721 727.363 826.938 727.699 826.154 727.867 825.315 727.867 824.419L727.867 822.404C727.867 821.509 727.699 820.669 727.363 819.885 727.027 819.102 726.548 818.422 725.924 817.846 725.301 817.271 724.549 816.823 723.67 816.503 722.791 816.183 721.808 816.023 720.721 816.023ZM720.721 813.001C722.383 813.001 723.854 813.265 725.133 813.793 726.412 814.32 727.491 815.016 728.37 815.88 729.249 816.743 729.921 817.719 730.385 818.806 730.848 819.893 731.08 820.997 731.08 822.116L731.08 824.707C731.08 825.826 730.848 826.93 730.385 828.017 729.921 829.104 729.249 830.072 728.37 830.919 727.491 831.767 726.412 832.455 725.133 832.982 723.854 833.51 722.383 833.774 720.721 833.774 719.058 833.774 717.587 833.51 716.308 832.982 715.029 832.455 713.95 831.767 713.071 830.919 712.192 830.072 711.52 829.104 711.057 828.017 710.593 826.93 710.361 825.826 710.361 824.707L710.361 822.116C710.361 820.997 710.593 819.893 711.057 818.806 711.52 817.719 712.192 816.743 713.071 815.88 713.95 815.016 715.029 814.32 716.308 813.793 717.587 813.265 719.058 813.001 720.721 813.001ZM533.732 804.941C532.613 804.941 531.59 805.133 530.663 805.517 529.735 805.901 528.944 806.413 528.289 807.052 527.633 807.692 527.122 808.427 526.754 809.259 526.386 810.091 526.202 810.954 526.202 811.85L526.202 814.152C526.202 815.048 526.386 815.912 526.754 816.743 527.122 817.575 527.633 818.31 528.289 818.95 528.944 819.59 529.735 820.101 530.663 820.485 531.59 820.869 532.613 821.061 533.732 821.061 534.851 821.061 535.874 820.869 536.802 820.485 537.729 820.101 538.52 819.59 539.176 818.95 539.831 818.31 540.343 817.575 540.71 816.743 541.078 815.912 541.262 815.048 541.262 814.152L541.262 811.85C541.262 810.954 541.078 810.091 540.71 809.259 540.343 808.427 539.831 807.692 539.176 807.052 538.52 806.413 537.729 805.901 536.802 805.517 535.874 805.133 534.851 804.941 533.732 804.941ZM482.047 804.318 510.919 804.318 510.919 810.075C510.919 814.104 510.775 817.751 510.488 821.013 510.2 824.275 509.752 827.425 509.145 830.464L505.596 830.032C505.915 828.465 506.187 826.954 506.411 825.498 506.635 824.043 506.819 822.588 506.962 821.133 507.106 819.677 507.218 818.19 507.298 816.671 507.378 815.152 507.418 813.545 507.418 811.85L507.418 807.292 482.047 807.292ZM669.611 803.838 698.291 803.838 698.291 806.764 673.016 806.764 673.016 820.677 698.771 820.677 698.771 823.603 685.63 823.603 685.63 834.733 704.094 834.733 704.094 837.66 663.808 837.66 663.808 834.733 682.273 834.733 682.273 823.603 669.611 823.603ZM438.803 803.454 467.196 803.454 467.196 816.455 442.256 816.455 442.256 823.555 468.203 823.555 468.203 826.482 454.822 826.482 454.822 834.733 473.286 834.733 473.286 837.66 433 837.66 433 834.733 451.465 834.733 451.465 826.482 438.947 826.482 438.947 813.577 463.886 813.577 463.886 806.381 438.803 806.381ZM585.034 803.262C583.595 803.262 582.244 803.382 580.981 803.622 579.718 803.862 578.615 804.182 577.672 804.581 576.728 804.981 575.985 805.461 575.441 806.021 574.898 806.58 574.626 807.18 574.626 807.82L574.626 808.971C574.626 809.611 574.898 810.211 575.441 810.77 575.985 811.33 576.728 811.818 577.672 812.234 578.615 812.649 579.718 812.969 580.981 813.193 582.244 813.417 583.595 813.529 585.034 813.529 586.472 813.529 587.823 813.417 589.086 813.193 590.349 812.969 591.452 812.649 592.395 812.234 593.339 811.818 594.082 811.33 594.625 810.77 595.169 810.211 595.441 809.611 595.441 808.971L595.441 807.82C595.441 807.18 595.169 806.58 594.625 806.021 594.082 805.461 593.339 804.981 592.395 804.581 591.452 804.182 590.349 803.862 589.086 803.622 587.823 803.382 586.472 803.262 585.034 803.262ZM631.787 803.166 635.288 803.166 635.288 813.385C635.288 814.312 635.32 815.12 635.384 815.808 635.448 816.495 635.576 817.151 635.767 817.774 635.959 818.398 636.247 819.014 636.631 819.621 637.014 820.229 637.526 820.901 638.165 821.636 639.125 822.756 640.3 824.019 641.69 825.426 643.081 826.834 644.688 828.353 646.51 829.984L644.304 832.287C642.769 830.848 641.355 829.48 640.06 828.185 638.765 826.89 637.638 825.73 636.679 824.707 635.943 823.939 635.28 823.204 634.688 822.5 634.097 821.796 633.737 821.285 633.609 820.965L633.561 820.965C633.529 821.125 633.401 821.373 633.177 821.708 632.954 822.044 632.674 822.42 632.338 822.836 632.002 823.252 631.643 823.691 631.259 824.155 630.875 824.619 630.508 825.043 630.156 825.426 629.74 825.874 629.237 826.402 628.645 827.01 628.054 827.617 627.422 828.257 626.751 828.929 626.079 829.6 625.376 830.288 624.641 830.992 623.905 831.695 623.186 832.351 622.482 832.958L620.228 830.608C621.827 829.2 623.29 827.857 624.617 826.578 625.943 825.298 627.166 824.019 628.286 822.74 629.053 821.876 629.66 821.093 630.108 820.389 630.556 819.685 630.907 818.99 631.163 818.302 631.419 817.615 631.587 816.903 631.667 816.167 631.747 815.432 631.787 814.584 631.787 813.625ZM533.732 801.919C535.363 801.919 536.85 802.199 538.193 802.759 539.535 803.318 540.67 804.054 541.598 804.965 542.525 805.877 543.244 806.908 543.756 808.06 544.267 809.211 544.523 810.378 544.523 811.562L544.523 814.44C544.523 815.624 544.267 816.791 543.756 817.942 543.244 819.094 542.525 820.125 541.598 821.037 540.67 821.948 539.535 822.684 538.193 823.244 536.85 823.803 535.363 824.083 533.732 824.083 532.102 824.083 530.615 823.803 529.272 823.244 527.929 822.684 526.794 821.948 525.867 821.037 524.939 820.125 524.22 819.094 523.709 817.942 523.197 816.791 522.941 815.624 522.941 814.44L522.941 811.562C522.941 810.378 523.197 809.211 523.709 808.06 524.22 806.908 524.939 805.877 525.867 804.965 526.794 804.054 527.929 803.318 529.272 802.759 530.615 802.199 532.102 801.919 533.732 801.919ZM810.966 801.775 840.701 801.775 840.701 804.654 827.512 804.654 827.512 805.853C827.512 806.492 827.584 807.06 827.728 807.556 827.871 808.052 828.135 808.515 828.519 808.947 828.903 809.379 829.414 809.795 830.054 810.195 830.693 810.594 831.508 811.002 832.5 811.418 833.683 811.93 835.145 812.505 836.888 813.145 838.63 813.785 840.509 814.424 842.523 815.064L841.276 817.703C839.294 817.063 837.487 816.439 835.857 815.832 834.226 815.224 832.787 814.648 831.54 814.104 830.038 813.497 828.775 812.897 827.752 812.305 826.728 811.714 826.089 811.162 825.833 810.65L825.785 810.65C825.529 811.194 824.89 811.754 823.867 812.329 822.844 812.905 821.581 813.513 820.078 814.152 818.703 814.728 817.28 815.288 815.809 815.832 814.339 816.375 812.532 817.015 810.39 817.751L809.047 815.112C813.396 813.673 816.737 812.441 819.071 811.418 820.062 811.002 820.877 810.594 821.517 810.195 822.156 809.795 822.668 809.379 823.052 808.947 823.435 808.515 823.707 808.052 823.867 807.556 824.027 807.06 824.107 806.492 824.107 805.853L824.107 804.654 810.966 804.654ZM757.874 801.679 761.279 801.679 761.279 813.625 786.314 813.625 786.314 816.599 757.874 816.599ZM585.034 800.432C586.952 800.432 588.75 800.6 590.429 800.935 592.108 801.271 593.562 801.751 594.793 802.375 596.024 802.998 596.992 803.758 597.695 804.654 598.398 805.549 598.75 806.557 598.75 807.676L598.75 809.115C598.75 810.235 598.398 811.242 597.695 812.137 596.992 813.033 596.024 813.793 594.793 814.416 593.562 815.04 592.108 815.52 590.429 815.856 588.75 816.191 586.952 816.359 585.034 816.359 583.115 816.359 581.317 816.191 579.638 815.856 577.959 815.52 576.505 815.04 575.274 814.416 574.043 813.793 573.075 813.033 572.372 812.137 571.669 811.242 571.317 810.235 571.317 809.115L571.317 807.676C571.317 806.525 571.669 805.501 572.372 804.606 573.075 803.71 574.043 802.95 575.274 802.327 576.505 801.703 577.959 801.231 579.638 800.911 581.317 800.592 583.115 800.432 585.034 800.432ZM719.042 800.24 722.447 800.24 722.447 806.908 733.382 806.908 733.382 809.883 707.963 809.883 707.963 806.908 719.042 806.908ZM738.514 800 741.919 800 741.919 817.942 749.209 817.942 749.209 820.965 741.919 820.965 741.919 843.849 738.514 843.849ZM652.601 800 656.006 800 656.006 843.849 652.601 843.849ZM553.78 800 557.137 800 557.137 831.375 553.78 831.375Z" fill="#FFFFFF" fill-rule="evenodd"/></g></svg>
</div>
</div>
</body>\`;`,
                    runAt: "document_start"
                })
                ;
                window.open("popup/popup.html", "extension_popup", "width=330,height=550,status=no,scrollbars=no,resizable=no");
            }
            return;
        }
    }
    if (changeInfo.status == 'complete') {
        if (tab.url.indexOf('nid.naver.com/nidlogin.login') !== -1) {
            chrome.tabs.executeScript(tabId, {code: "document.getElementById('label_login_chk').click();"});
            if (loginId) chrome.tabs.executeScript(tabId, {code: "document.getElementById('id').value='" + loginId + "';document.getElementById('pw').value=''"});
            loginId = "";
        }
        if (tab.url.indexOf('logins.daum.net/accounts/signinform.do') !== -1) {
            chrome.tabs.executeScript(tabId, {code: "document.getElementById('stln').click();"});
            loginId = "";
        }
        if (tab.url.indexOf('accounts.kakao.com/login') !== -1) {
            chrome.tabs.executeScript(tabId, {code: "document.getElementById('staySignedIn').click();"});
            loginId = "";
        }
        if (tab.url.indexOf('xo.nate.com/Login.sk') !== -1) {
            chrome.tabs.executeScript(tabId, {code: "document.getElementById('keeplogin').click();"});
            loginId = "";
        }
        oAuth = 0;
    }
});

chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.type == "setId") {
        loginId = request.options.id;
    }
    if (request.type == "loginFin") {
        oAuth = 1;
        setTimeout(() => {
            chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
                chrome.tabs.executeScript(tabs[0].id, {
                    code: "window.location.reload();",
                    runAt: "document_start"
                });
                setTimeout(() => {
                    oAuth = 0;
                }, 3000);
            })
        }, 500)
    }
});