const recipes = {
    heading:'Most Popular Recipes',
    subheading:'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim',
    cat:[
        {
            type:'Pizza',
            icon:`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" fill="white"></rect>
            <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M14.3981 0.0317697C13.9776 0.11614 13.5427 0.354714 13.4091 0.574413C13.3719 0.635571 13.1834 1.33922 12.9901 2.13802C12.6618 3.49557 12.6337 3.58892 12.5607 3.56771C12.1123 3.43742 11.6562 3.38001 11.0555 3.37825C10.0996 3.37552 9.33818 3.54598 8.55055 3.93911C7.82543 4.30101 7.63997 4.45533 6.13606 5.94809C5.32024 6.75784 4.60998 7.4979 4.46768 7.68646C3.98753 8.32254 3.59342 9.22826 3.4458 10.035C3.34595 10.5804 3.35475 11.5687 3.46402 12.0866C3.50937 12.3015 3.55671 12.5126 3.56922 12.5556C3.59045 12.6286 3.49694 12.6567 2.13529 12.9854C1.22674 13.2048 0.634037 13.3669 0.560071 13.4163C0.279845 13.6035 0.0435991 14.1351 0.00462227 14.6662C-0.0240728 15.0569 0.082224 15.5172 0.284849 15.8793C0.414485 16.1111 0.854488 16.6002 0.933302 16.6002C0.953084 16.6002 0.969581 16.6837 0.969933 16.7858C0.970989 17.0686 1.06853 17.4695 1.2077 17.7626C1.38109 18.1279 1.8648 18.6114 2.23021 18.7847C2.51833 18.9214 2.92139 19.0208 3.19763 19.0233C3.35733 19.0247 3.38434 19.0395 3.49084 19.1839C3.61734 19.3555 3.98264 19.6475 4.226 19.7716C4.43988 19.8807 4.93356 20 5.17094 20C5.77018 20 6.44787 19.7089 6.61465 19.3799C6.6433 19.3233 6.82298 18.6301 7.01396 17.8393C7.33844 16.4955 7.36627 16.403 7.43934 16.4242C8.1754 16.6376 9.26198 16.6816 10.0298 16.5289C10.7909 16.3775 11.4466 16.1068 12.1111 15.6697C12.3684 15.5004 12.764 15.1331 13.8639 14.0424C14.6995 13.2138 15.3874 12.4969 15.5346 12.3015C16.0153 11.6635 16.3873 10.8012 16.5545 9.9373C16.6548 9.41959 16.6457 8.42512 16.536 7.90522C16.4906 7.69029 16.4434 7.47926 16.4311 7.43628C16.4101 7.36324 16.5042 7.33506 17.8652 7.00641C18.7749 6.78675 19.3662 6.62497 19.4402 6.5755C19.7203 6.38804 19.9564 5.85649 19.9954 5.32561C20.0241 4.9349 19.9178 4.47468 19.7152 4.11254C19.5855 3.88076 19.1455 3.39166 19.0667 3.39166C19.0469 3.39166 19.0304 3.30811 19.0301 3.20603C19.029 2.92322 18.9315 2.52236 18.7923 2.22923C18.6189 1.86396 18.1352 1.38045 17.7698 1.20713C17.4821 1.07067 17.0794 0.971216 16.8024 0.968246C16.6411 0.966526 16.6157 0.952106 16.4972 0.794737C16.3514 0.601338 16.0454 0.3553 15.7925 0.228334C15.4025 0.0325122 14.8104 -0.0509594 14.3981 0.0317697ZM15.1433 1.22968C15.4329 1.32831 15.7008 1.61832 15.8409 1.98483C15.9025 2.14603 15.9657 2.29215 15.9812 2.3095C15.9967 2.32689 16.1729 2.2941 16.3727 2.23662C16.7817 2.11903 16.9679 2.12442 17.2423 2.26194C17.4694 2.3757 17.6131 2.51716 17.7255 2.73733C17.875 3.03014 17.8824 3.20881 17.7624 3.62574C17.7049 3.82547 17.6721 4.00159 17.6895 4.01711C17.7069 4.03262 17.853 4.09573 18.0143 4.15732C18.566 4.36811 18.874 4.80258 18.8229 5.29786C18.8107 5.41619 18.7824 5.53128 18.7601 5.55359C18.7209 5.59279 16.1451 6.23934 16.0147 6.2427C15.9756 6.24372 15.8461 6.0876 15.684 5.84383C15.326 5.30548 14.6847 4.66382 14.1537 4.31285C13.9334 4.16713 13.753 4.02363 13.753 3.99393C13.753 3.91519 14.3712 1.39451 14.4151 1.2942C14.4753 1.15668 14.8354 1.12479 15.1433 1.22968ZM10.9286 9.77121L10.9187 15.0175L10.5958 15.1463C10.2453 15.2862 9.74264 15.405 9.32563 15.4467L9.06174 15.4731V10.2314V4.98957L9.28317 4.89168C9.70355 4.70586 10.3647 4.55127 10.8309 4.52986L10.9385 4.52493L10.9286 9.77121ZM12.6975 4.86132C15.0404 5.8037 16.1194 8.54982 15.0461 10.8392C14.7576 11.4545 14.5488 11.7085 13.2979 12.9659L12.1122 14.1578L12.1116 9.41642L12.1111 4.67503L12.2381 4.70133C12.308 4.71583 12.5147 4.78781 12.6975 4.86132ZM7.88892 10.5852V15.3168L7.76186 15.2905C7.692 15.276 7.48719 15.2048 7.30677 15.1322C4.95741 14.1874 3.88006 11.4432 4.95679 9.14647C5.24194 8.53821 5.4247 8.31562 6.67364 7.05526C7.32855 6.39437 7.86992 5.8536 7.87668 5.8536C7.88341 5.8536 7.88892 7.98283 7.88892 10.5852ZM4.31467 14.148C4.66577 14.6787 5.30769 15.3198 5.84625 15.6776C6.09012 15.8397 6.2463 15.9691 6.24529 16.0083C6.24193 16.1386 5.59511 18.7133 5.5559 18.7525C5.53358 18.7748 5.41845 18.8031 5.30007 18.8153C4.80459 18.8664 4.36995 18.5585 4.15907 18.007C4.09746 17.8458 4.03432 17.6997 4.0188 17.6823C4.00328 17.6649 3.82708 17.6977 3.62727 17.7552C3.21018 17.8751 3.03144 17.8677 2.73851 17.7183C2.51825 17.606 2.37673 17.4623 2.26293 17.2353C2.12536 16.961 2.11996 16.7749 2.2376 16.3661C2.29511 16.1664 2.3279 15.9902 2.31051 15.9747C2.29315 15.9592 2.14698 15.8961 1.98571 15.8345C1.43402 15.6237 1.126 15.1892 1.17713 14.694C1.18933 14.5756 1.21689 14.4613 1.23839 14.4398C1.28186 14.3963 3.79065 13.7689 3.98526 13.7528C4.02639 13.7494 4.14527 13.892 4.31467 14.148Z" fill="#151515"></path>
            </svg>`
        },

        {
            type:'Drinks',
            icon:`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6">
            <rect width="20" height="20" fill="white"></rect>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4122 0.0112096C14.1211 0.0417625 13.4816 0.18798 13.2032 0.287628C11.3669 0.944946 10.0489 2.60763 9.8347 4.53707L9.80768 4.78063H10.2188H10.6299L10.6762 4.45913C10.8058 3.55797 11.2682 2.66948 11.9439 2.02287C12.5549 1.43831 13.2232 1.08212 14.0597 0.895337C14.4352 0.811472 15.3709 0.812446 15.7505 0.897052C17.4445 1.27472 18.6829 2.47809 19.0894 4.14167C19.1986 4.58878 19.2098 5.50603 19.1113 5.93904C18.9413 6.68599 18.6666 7.24681 18.1802 7.83983C17.3198 8.88869 15.8567 9.48891 14.5195 9.34149C13.8204 9.2644 13.3149 9.10096 12.7344 8.76437L12.425 8.58503L12.3238 8.70396C12.2681 8.76936 12.1489 8.90961 12.059 9.01557L11.8955 9.20832L12.2154 9.40848C13.1448 9.98996 14.2933 10.265 15.3506 10.1593C16.6139 10.033 17.6191 9.56155 18.5018 8.6814C19.262 7.92354 19.6941 7.13232 19.9299 6.06666C20.0131 5.69048 20.025 4.64576 19.9507 4.23504C19.576 2.16461 17.9788 0.524219 15.9259 0.101544C15.5574 0.0256287 14.7396 -0.0231626 14.4122 0.0112096ZM15.0183 1.53617C15.0183 1.73274 15.1741 4.28637 15.1868 4.29911C15.1924 4.30461 15.6309 3.82332 16.1615 3.2296L17.126 2.15011L17.0204 2.06181C16.6939 1.78897 15.8284 1.4728 15.2431 1.41263L15.0183 1.38952V1.53617ZM14.2362 1.45663C14.0471 1.48921 13.615 1.62635 13.3892 1.72545C13.1271 1.84053 12.5756 2.19676 12.4508 2.33156L12.3663 2.42291L13.4479 3.38256C14.0428 3.91038 14.535 4.32795 14.5417 4.31053C14.5485 4.29307 14.5177 3.66833 14.4733 2.9222C14.4289 2.17603 14.3926 1.53485 14.3926 1.49736C14.3927 1.45987 14.3795 1.43153 14.3633 1.43446C14.3472 1.43738 14.29 1.44736 14.2362 1.45663ZM16.6153 3.64164C16.085 4.23594 15.6542 4.72541 15.658 4.72939C15.6618 4.73332 16.3212 4.69879 17.1234 4.65261L18.582 4.56863L18.5572 4.43107C18.4769 3.98442 18.2414 3.4142 17.9774 3.02695C17.8341 2.81671 17.6262 2.56063 17.599 2.5609C17.5882 2.56102 17.1456 3.04734 16.6153 3.64164ZM11.8027 3.09909C11.6472 3.33852 11.4835 3.68583 11.3956 3.96225C11.3337 4.15714 11.2192 4.74852 11.2395 4.76871C11.2467 4.7758 11.8873 4.77701 12.6631 4.7714L14.0739 4.76115L13.1528 3.94276C12.6463 3.49265 12.1674 3.06916 12.0887 3.00166L11.9456 2.87894L11.8027 3.09909ZM0.0992549 5.18807C-0.0802215 5.36691 -0.0410808 5.46702 0.423251 6.01721C0.654263 6.2909 2.22028 8.14267 3.90329 10.1322L6.96335 13.7496V16.0991V18.4485L6.32795 18.6348C4.12692 19.2799 4.20754 19.2529 4.1939 19.3485C4.16379 19.5592 4.02983 19.5505 7.29771 19.5505C9.99357 19.5505 10.3271 19.5439 10.382 19.4893C10.5506 19.3211 10.4395 19.2691 9.03573 18.8592L7.72583 18.4767L7.71574 16.0761L7.70569 13.6755L11.1467 9.60801C14.9056 5.16488 14.7178 5.41293 14.4922 5.18807L14.3962 5.0924H7.29571H0.19521L0.0992549 5.18807ZM17.1427 5.2634C16.3864 5.30865 15.7564 5.35685 15.7428 5.37045C15.716 5.39727 17.8149 7.27475 17.8717 7.27475C17.9178 7.27475 18.1612 6.87153 18.2996 6.566C18.5039 6.11495 18.6901 5.16395 18.5718 5.17572C18.5422 5.17864 17.8991 5.21812 17.1427 5.2634ZM4.01329 8.31722C4.89264 9.74795 5.72258 11.0983 5.85755 11.318C5.99257 11.5376 6.09572 11.7174 6.08681 11.7174C6.07351 11.7174 1.23934 6.00696 1.06401 5.78413C1.01329 5.71971 1.04939 5.71593 1.71239 5.71593H2.41442L4.01329 8.31722ZM15.2665 6.00914C15.2794 6.11581 15.3182 6.7467 15.3528 7.41115C15.3874 8.0756 15.4274 8.64847 15.4418 8.68421C15.4658 8.74375 15.499 8.7413 15.8393 8.6549C16.2921 8.53994 16.8254 8.28141 17.1775 8.00623C17.322 7.8933 17.4408 7.78956 17.4414 7.77576C17.4424 7.75429 15.5231 6.03564 15.3162 5.87275C15.2464 5.8178 15.2442 5.82388 15.2665 6.00914ZM13.7176 7.05247L12.8274 8.11141L12.916 8.17961C13.0677 8.29641 13.6174 8.54995 13.9039 8.63518C14.1795 8.71721 14.7769 8.79913 14.8009 8.75817C14.808 8.74605 14.7813 8.20128 14.7416 7.54755C14.702 6.89382 14.6688 6.27566 14.6679 6.17383C14.6671 6.072 14.6532 5.98981 14.637 5.9911C14.6209 5.99243 14.2072 6.47001 13.7176 7.05247Z" fill="#151515"></path>
            </g>
            </svg>`
        },
        {
            type:'Sweets',
            icon:`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6">
            <rect width="20" height="20" fill="white"></rect>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.06414 0.0273535C7.89349 0.123854 6.65938 0.482111 5.52795 1.05399C4.47229 1.58752 3.6499 2.19259 2.83177 3.03753C2.39196 3.49178 1.67917 4.37629 1.67917 4.46782C1.67917 4.49048 1.90334 4.63808 2.17736 4.79583C2.45139 4.95361 2.73007 5.11468 2.79665 5.15381L2.91774 5.22495L3.20692 4.84459C4.61495 2.99265 6.66012 1.81316 8.96001 1.52663C9.19285 1.4976 9.39107 1.46617 9.40045 1.45674C9.40987 1.44731 9.4128 1.1157 9.40694 0.719801L9.39627 0L9.06414 0.0273535ZM9.22044 2.66863C7.91513 2.80861 6.50801 3.38385 5.46934 4.20207C4.93032 4.6267 3.98453 5.64774 3.98453 5.80501C3.98453 5.82501 5.16699 6.52442 6.61225 7.35927C8.05752 8.19408 9.27952 8.90249 9.32789 8.93353L9.41581 8.98988V5.81566C9.41581 4.06984 9.4026 2.64425 9.3865 2.6477C9.3704 2.65114 9.29566 2.66057 9.22044 2.66863ZM8.17908 5.00644C8.35585 5.49704 8.37515 5.61549 8.27833 5.61549C8.20362 5.61549 7.59934 5.93587 7.36572 6.09929C7.23607 6.19 7.10994 6.2766 7.08544 6.2917C7.0582 6.30849 6.90265 6.14852 6.68493 5.87983C6.48917 5.63819 6.32897 5.43079 6.32897 5.41893C6.32897 5.31093 7.76032 4.48308 7.95054 4.48109C7.97203 4.48085 8.07487 4.71725 8.17908 5.00644ZM0.89828 5.85815C0.197606 7.36851 -0.116821 9.20604 0.0392007 10.8788C0.146654 12.0308 0.471124 13.2525 0.908713 14.1528L1.07353 14.492L1.70531 14.1219L2.33714 13.7519L2.21804 13.4893C1.93401 12.8631 1.72032 12.1504 1.57602 11.3484C1.47696 10.7979 1.47618 9.21266 1.57465 8.64993C1.70996 7.8766 1.9287 7.1433 2.20534 6.53526L2.3378 6.24423L1.78381 5.92346C1.47911 5.74702 1.19294 5.57887 1.14784 5.54979C1.06954 5.49927 1.0584 5.51301 0.89828 5.85815ZM18.3001 5.87588L17.6699 6.24322L17.8257 6.60437C18.6515 8.51825 18.7468 10.7276 18.0888 12.7019C18.0057 12.9514 17.8766 13.2895 17.8021 13.4534L17.6665 13.7514L18.2984 14.1188L18.9303 14.4863L19.0167 14.3261C19.1612 14.0583 19.485 13.2122 19.6097 12.7767C20.193 10.7392 20.1209 8.56787 19.4042 6.58535C19.2757 6.22999 18.9972 5.58055 18.9527 5.53269C18.9404 5.51942 18.6467 5.67384 18.3001 5.87588ZM3.27917 7.0162C3.11651 7.38013 3.00061 7.71647 2.88831 8.15029C2.47687 9.73977 2.61972 11.5049 3.27917 12.9804L3.3615 13.1646L3.81952 12.8981C4.07147 12.7515 4.50617 12.4995 4.78555 12.3379C5.06493 12.1764 5.98805 11.6424 6.83693 11.1512C7.68581 10.66 8.47268 10.2048 8.58549 10.1396C8.69833 10.0744 8.79063 10.0108 8.79063 9.99832C8.79063 9.98587 8.69829 9.92228 8.58549 9.85705C8.47264 9.79182 7.68581 9.33659 6.83693 8.84544C5.98805 8.35425 5.06493 7.82025 4.78555 7.65871C4.50617 7.49717 4.07147 7.24512 3.81952 7.09853L3.3615 6.83204L3.27917 7.0162ZM13.9191 8.40637C12.4309 9.26979 11.2132 9.98615 11.2132 9.99828C11.2132 10.0104 12.4348 10.7267 13.9279 11.5901L16.6425 13.1599L16.7435 12.9389C17.0883 12.1848 17.3021 11.2285 17.3352 10.2918C17.3697 9.31456 17.262 8.5305 16.9752 7.66994C16.8626 7.33231 16.6528 6.82053 16.6319 6.83255C16.6281 6.83474 15.4073 7.54296 13.9191 8.40637ZM5.35212 9.99832V10.5853H4.7074H4.06268V9.99832V9.41133H4.7074H5.35212V9.99832ZM15.9412 9.99832V10.5853H15.2964H14.6517V9.99832V9.41133H15.2964H15.9412V9.99832ZM6.7006 12.582C5.21798 13.441 3.99915 14.1611 3.99211 14.1823C3.95023 14.3082 4.84697 15.2885 5.44981 15.7759C6.47581 16.6053 7.8607 17.1714 9.24974 17.3289L9.41581 17.3478V14.1818C9.41581 12.4404 9.41139 11.0168 9.40604 11.018C9.40069 11.0193 8.18322 11.7231 6.7006 12.582ZM10.588 14.1801V17.3478L10.7541 17.3292C12.3441 17.1512 13.7951 16.4933 14.9595 15.4225C15.4538 14.968 16.0421 14.2735 16.0113 14.1809C16.0039 14.1589 14.8555 13.4806 13.4591 12.6735C12.0627 11.8664 10.8454 11.1625 10.7541 11.1092L10.588 11.0125V14.1801ZM8.36081 13.9908V14.5787L7.70632 14.568L7.05184 14.5572L7.04101 13.98L7.03023 13.4028H7.6955H8.36081V13.9908ZM13.3591 14.165C13.5328 14.3797 13.6749 14.5656 13.6749 14.5781C13.6749 14.6155 13.2064 14.9449 12.9129 15.1139C12.645 15.2682 12.1111 15.516 12.0467 15.516C11.9957 15.5159 11.6274 14.4587 11.6667 14.4252C11.6859 14.4089 11.7808 14.3618 11.8775 14.3206C12.1195 14.2175 12.5579 13.9682 12.773 13.8113C12.9114 13.7103 12.9624 13.6914 12.9976 13.7277C13.0227 13.7535 13.1854 13.9503 13.3591 14.165ZM2.30435 15.1253C1.97125 15.3191 1.69254 15.496 1.68496 15.5185C1.65983 15.5933 2.35578 16.4675 2.83177 16.9591C3.67143 17.8263 4.51262 18.4389 5.6061 18.9795C6.72682 19.5335 7.88677 19.8661 9.05437 19.9683L9.41581 19.9998V19.2676V18.5354L9.30835 18.5148C9.24928 18.5034 9.08661 18.4828 8.94692 18.4689C8.18385 18.3931 7.13026 18.0858 6.34851 17.7111C5.00722 17.0682 4.10136 16.3056 3.00769 14.8987L2.91 14.7731L2.30435 15.1253ZM16.7936 15.1551C15.5321 16.7998 13.7443 17.9376 11.7798 18.3462C11.5219 18.3998 11.1966 18.4551 11.0569 18.4689C10.9172 18.4828 10.7546 18.5034 10.6955 18.5148L10.588 18.5354V19.2677V20L10.9495 19.9679C13.2835 19.7607 15.5063 18.6825 17.192 16.9398C17.611 16.5066 18.3247 15.6141 18.3247 15.5233C18.3247 15.4915 17.9242 15.2493 17.1091 14.7882C17.0961 14.7808 16.9541 14.9459 16.7936 15.1551Z" fill="#151515"></path>
            </g>
            </svg>`
        },
        {
            type:'Burger',
            icon:`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" fill="white"></rect>
            <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M9.0621 1.26987C6.58241 1.44417 4.76951 2.09035 3.39554 3.28959C2.20537 4.32836 1.43225 5.89792 1.24627 7.65291C1.16171 8.45069 1.19129 8.36569 0.961813 8.47085C0.845473 8.52416 0.655585 8.66676 0.520369 8.80233C-0.0782149 9.40251 -0.169036 10.2813 0.292886 11.0034L0.424506 11.2092L0.292886 11.415C-0.272715 12.2991 0.0188981 13.4419 0.932543 13.922C1.1603 14.0417 1.20708 14.0828 1.20708 14.1635C1.20708 14.5086 1.45961 15.3521 1.71871 15.8724C2.36126 17.1626 3.47597 18.1226 4.85392 18.5722C5.60823 18.8183 5.4323 18.8102 10 18.8102C13.8417 18.8102 14.1884 18.8048 14.5047 18.7404C16.6626 18.3009 18.2911 16.6904 18.731 14.5608C18.765 14.3957 18.7929 14.2165 18.7929 14.1625C18.7929 14.0816 18.8325 14.0454 19.0177 13.9563C19.1457 13.8946 19.3435 13.747 19.4774 13.6131C20.0781 13.0124 20.1695 12.1377 19.7071 11.415L19.5755 11.2092L19.7071 11.0034C20.1694 10.2807 20.0782 9.40705 19.4774 8.80455C19.3477 8.6745 19.1509 8.52607 19.0383 8.47343C18.8089 8.3662 18.8383 8.45096 18.7537 7.65291C18.3192 3.55255 15.0652 1.19902 9.90231 1.25084C9.53692 1.25451 9.15882 1.26307 9.0621 1.26987ZM11.0747 2.45543C12.9667 2.60866 14.419 3.08372 15.5112 3.90673C16.1019 4.35181 16.666 5.03743 17.0128 5.73176C17.3058 6.31822 17.561 7.26915 17.6093 7.95473L17.6322 8.27819H10H2.36786L2.39068 7.95473C2.49045 6.54117 3.11323 5.17409 4.06978 4.26892C5.20438 3.19525 6.76425 2.6266 9.08164 2.44183C9.45125 2.41236 10.6432 2.42049 11.0747 2.45543ZM8.54472 3.66921C8.37973 3.75632 8.24142 3.98689 8.24142 4.17482C8.24142 4.24102 8.27683 4.36459 8.32009 4.44939C8.40857 4.62279 8.63371 4.76102 8.82762 4.76102C9.12498 4.76102 9.41381 4.47218 9.41381 4.17482C9.41381 3.98091 9.27559 3.75577 9.10219 3.66729C8.90965 3.56909 8.73328 3.56967 8.54472 3.66921ZM10.8895 4.8416C10.7245 4.92871 10.5862 5.15928 10.5862 5.34721C10.5862 5.54113 10.7244 5.76626 10.8978 5.85474C10.9826 5.898 11.1062 5.93341 11.1724 5.93341C11.4698 5.93341 11.7586 5.64457 11.7586 5.34721C11.7586 5.1533 11.6204 4.92816 11.447 4.83968C11.2544 4.74148 11.0781 4.74206 10.8895 4.8416ZM6.19994 6.01399C6.03494 6.1011 5.89664 6.33167 5.89664 6.5196C5.89664 6.71352 6.03487 6.93865 6.20826 7.02713C6.29307 7.07039 6.41664 7.1058 6.48284 7.1058C6.78019 7.1058 7.06903 6.81696 7.06903 6.5196C7.06903 6.32569 6.93081 6.10055 6.75741 6.01207C6.56487 5.91387 6.3885 5.91445 6.19994 6.01399ZM13.2343 6.01399C13.0693 6.1011 12.931 6.33167 12.931 6.5196C12.931 6.5858 12.9664 6.70937 13.0097 6.79418C13.0981 6.96757 13.3233 7.1058 13.5172 7.1058C13.8145 7.1058 14.1034 6.81696 14.1034 6.5196C14.1034 6.32569 13.9652 6.10055 13.7918 6.01207C13.5992 5.91387 13.4228 5.91445 13.2343 6.01399ZM18.5204 9.52925C18.6947 9.61819 18.832 9.8431 18.832 10.0397C18.832 10.2214 18.68 10.4629 18.5115 10.5488C18.3701 10.6209 18.1373 10.623 9.99712 10.623H1.62804L1.47215 10.5354C1.07886 10.3143 1.07487 9.7794 1.46473 9.54339L1.61741 9.45097L9.9918 9.45078C18.3079 9.45058 18.3672 9.45113 18.5204 9.52925ZM18.5204 11.874C18.6947 11.963 18.832 12.1879 18.832 12.3844C18.832 12.5662 18.68 12.8076 18.5115 12.8936C18.3831 12.9591 18.2715 12.968 17.5537 12.97C16.3459 12.9733 16.0759 13.0694 15.4511 13.7176C15.111 14.0703 14.986 14.1397 14.6896 14.1397C14.4008 14.1397 14.2864 14.0738 13.8863 13.677C13.3452 13.1404 12.9612 12.9667 12.3253 12.9706C11.7108 12.9744 11.2792 13.1805 10.7615 13.7176C10.4215 14.0703 10.2964 14.1397 10 14.1397C9.71125 14.1397 9.59686 14.0738 9.19673 13.677C8.65559 13.1404 8.27167 12.9667 7.63569 12.9706C7.0212 12.9744 6.58964 13.1805 6.07195 13.7176C5.72438 14.0782 5.60945 14.1395 5.27989 14.1399C5.01313 14.1403 4.84739 14.0433 4.45104 13.6548C3.83656 13.0525 3.58832 12.9692 2.40432 12.9683C1.6731 12.9678 1.61902 12.9627 1.47215 12.8801C1.07886 12.6591 1.07487 12.1242 1.46473 11.8882L1.61741 11.7958L9.9918 11.7956C18.3079 11.7954 18.3672 11.7959 18.5204 11.874ZM3.26943 14.2007C3.34915 14.234 3.5816 14.4252 3.78599 14.6255C4.30958 15.1387 4.70409 15.3136 5.32999 15.3097C5.93517 15.306 6.3885 15.094 6.86011 14.5942C7.19178 14.2427 7.36244 14.1401 7.61462 14.1404C7.95497 14.1408 8.06685 14.1997 8.41673 14.5627C8.94075 15.1064 9.36919 15.308 10 15.308C10.6214 15.308 11.072 15.1005 11.5497 14.5942C11.8813 14.2427 12.052 14.1401 12.3042 14.1404C12.6445 14.1408 12.7564 14.1997 13.1063 14.5627C13.6303 15.1064 14.0588 15.308 14.6896 15.308C15.3109 15.308 15.7615 15.1005 16.2392 14.5942C16.6298 14.1804 16.7162 14.1401 17.216 14.1401H17.6156L17.5933 14.2867C17.5524 14.5545 17.3789 15.0543 17.2099 15.3907C16.6842 16.437 15.7268 17.2055 14.5413 17.533L14.162 17.6378H10H5.83802L5.44723 17.5288C4.25748 17.1971 3.30718 16.4288 2.77828 15.3712C2.61891 15.0525 2.44696 14.5506 2.40675 14.2867L2.38439 14.1401H2.75444C3.00025 14.1401 3.17318 14.1605 3.26943 14.2007Z" fill="#151515"></path>
            </svg>`
        },
    ],
    recipe:[

        {
            title:'Big and Juicy Wagyu Beef Cheeseburger',
            time:'30 minutes',
            cat:'Sweets',
            price:'$10',
            layer:1,
            image:'food1.png',
            type:'',
            author:'Andreas Paula'
        },
        {
            title:'Big and Juicy Wagyu Beef Cheeseburger',
            time:'30 minutes',
            cat:'Pizza',
            price:'$5',
            layer:1,
            image:'food2.png',
            type:'',
            author:'Andreas Paula'


        },
        {
            title:'Big and Juicy Wagyu Beef Cheeseburger',
            time:'30 minutes',
            cat:'Pizza',
            price:'$10',
            layer:2,
            image:'food2.png',
            type:'',
            author:'Andreas Paula'


        },
        {
            title:'Big and Juicy Wagyu Beef Cheeseburger',
            time:'30 minutes',
            cat:'Drinks',
            price:'$10',
            layer:1,
            image:'food3.png',
            type:'',
            author:'Andreas Paula'


        },
        {
            title:'Big and Juicy Wagyu Beef Cheeseburger',
            time:'30 minutes',
            cat:'Sweets',
            price:'$10',
            layer:3,
            image:'food4.png',
            type:'popular',
            author:'Andreas Paula'


        },
        {
            title:'Big and Juicy Wagyu Beef Cheeseburger',
            time:'30 minutes',
            cat:'Pizza',
            price:'$10',
            layer:1,
            image:'food5.png',
            type:'popular',
            author:'Andreas Paula'


        },
        {
            title:'Big and Juicy Wagyu Beef Cheeseburger',
            time:'30 minutes',
            cat:'Sweets',
            layer:5,
            price:'$10',
            image:'food1.png',
            type:'popular',
            author:'Andreas Paula'

        },
        {
            title:'Big and Juicy Wagyu Beef Cheeseburger',
            time:'30 minutes',
            cat:'Pizza',
            price:'$10',
            layer:1,
            image:'food2.png',
            type:'',
            author:'Andreas Paula'


        },
        {
            title:'Big and Juicy Wagyu Beef Cheeseburger',
            time:'30 minutes',
            cat:'Snack',
            price:'$10',
            layer:1,
            image:'food3.png',
            type:'',
            author:'Andreas Paula'


        },
        {
            title:'Big and Juicy Wagyu Beef Cheeseburger',
            time:'30 minutes',
            cat:'Snack',
            price:'$10',
            layer:1,
            image:'food4.png',
            type:'',
            author:'Andreas Paula'


        },
        {
            title:'Big and Juicy Wagyu Beef Cheeseburger',
            time:'30 minutes',
            cat:'Snack',
            layer:2,
            price:'$10',
            image:'food5.png',
            type:'',
            author:'Andreas Paula'


        },
    ]

}


export {recipes}