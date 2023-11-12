import { motion } from 'framer-motion'
import React from 'react'

function LongLogo() {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
        >
            <svg width="250" height="50" viewBox="0 0 500 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="500" height="100" fill="#21760C" />
                <path d="M53.2227 42.2891H59.5703L62.085 42.7041L62.5732 40.0918L59.7412 39.75H53.1738L50.6836 40.1406L49.1211 41.7031L48.7793 43.7539V56.0098L49.1211 58.1094L50.7324 59.6475L53.1738 59.9404H59.2773L61.7432 59.6475L63.3301 58.1094L63.6719 56.0098V49.5889H56.5918V52.2012H61.084V55.6436C61.0026 55.904 60.9456 56.1481 60.9131 56.376C60.8805 56.6038 60.8236 56.848 60.7422 57.1084L59.1309 57.3525H53.2227L51.7334 57.1084L51.3916 55.5459V43.998L51.6357 42.6553L53.2227 42.2891ZM58.6426 37.5527C60.2865 37.5527 61.7757 37.7969 63.1104 38.2852C64.445 38.7734 65.5762 39.4408 66.5039 40.2871C67.4479 41.1335 68.1722 42.1263 68.6768 43.2656C69.1813 44.3887 69.4336 45.585 69.4336 46.8545V61.6982C69.4336 62.9678 69.1813 64.1722 68.6768 65.3115C68.1722 66.4346 67.4479 67.4193 66.5039 68.2656C65.5762 69.112 64.445 69.7793 63.1104 70.2676C61.7757 70.7559 60.2865 71 58.6426 71H51.123C49.4792 71 47.9899 70.7559 46.6553 70.2676C45.3206 69.7793 44.1813 69.112 43.2373 68.2656C42.3096 67.4193 41.5934 66.4346 41.0889 65.3115C40.5843 64.1722 40.332 62.9678 40.332 61.6982V46.8545C40.332 45.585 40.5843 44.3887 41.0889 43.2656C41.5934 42.1263 42.3096 41.1335 43.2373 40.2871C44.1813 39.4408 45.3206 38.7734 46.6553 38.2852C47.9899 37.7969 49.4792 37.5527 51.123 37.5527H58.6426ZM87.5488 37.5527C89.1927 37.5527 90.682 37.7969 92.0166 38.2852C93.3512 38.7734 94.4824 39.4408 95.4102 40.2871C96.3542 41.1335 97.0785 42.1263 97.583 43.2656C98.0876 44.3887 98.3398 45.585 98.3398 46.8545V61.6982C98.3398 62.9678 98.0876 64.1722 97.583 65.3115C97.0785 66.4346 96.3542 67.4193 95.4102 68.2656C94.4824 69.112 93.3512 69.7793 92.0166 70.2676C90.682 70.7559 89.1927 71 87.5488 71H80.0293C78.3854 71 76.8962 70.7559 75.5615 70.2676C74.2269 69.7793 73.0876 69.112 72.1436 68.2656C71.2158 67.4193 70.4997 66.4346 69.9951 65.3115C69.4906 64.1722 69.2383 62.9678 69.2383 61.6982V46.8545C69.2383 45.585 69.4906 44.3887 69.9951 43.2656C70.4997 42.1263 71.2158 41.1335 72.1436 40.2871C73.0876 39.4408 74.2269 38.7734 75.5615 38.2852C76.8962 37.7969 78.3854 37.5527 80.0293 37.5527H87.5488ZM88.7939 53.9102V59.9404H91.3818V53.6416L90.5273 51.3955L87.7441 50.3945L90.4297 49.1006L91.1865 46.9033V44.1934L90.8936 42.1426L89.2822 40.0918L86.8408 39.75H77.7344V59.9404H80.3467V51.8105H86.6943L88.4277 52.5918L88.7939 53.9102ZM86.6943 42.3379L88.4277 43.0947L88.5986 44.5107V47.0986L88.2324 48.4414L86.6943 49.1982H80.3467V42.3379H86.6943ZM116.455 37.5527C118.099 37.5527 119.588 37.7969 120.923 38.2852C122.257 38.7734 123.389 39.4408 124.316 40.2871C125.26 41.1335 125.985 42.1263 126.489 43.2656C126.994 44.3887 127.246 45.585 127.246 46.8545V61.6982C127.246 62.9678 126.994 64.1722 126.489 65.3115C125.985 66.4346 125.26 67.4193 124.316 68.2656C123.389 69.112 122.257 69.7793 120.923 70.2676C119.588 70.7559 118.099 71 116.455 71H108.936C107.292 71 105.802 70.7559 104.468 70.2676C103.133 69.7793 101.994 69.112 101.05 68.2656C100.122 67.4193 99.4059 66.4346 98.9014 65.3115C98.3968 64.1722 98.1445 62.9678 98.1445 61.6982V46.8545C98.1445 45.585 98.3968 44.3887 98.9014 43.2656C99.4059 42.1263 100.122 41.1335 101.05 40.2871C101.994 39.4408 103.133 38.7734 104.468 38.2852C105.802 37.7969 107.292 37.5527 108.936 37.5527H116.455ZM118.701 59.9404H121.484L119.556 41.752L118.042 40.2383L114.795 39.75H112.183L108.936 40.2383L107.446 41.752L105.444 59.9404H108.35L108.74 54.7402L108.984 52.4941H117.993L118.237 54.7402L118.701 59.9404ZM116.992 42.7041C117.106 44.0225 117.236 45.2676 117.383 46.4395C117.529 47.6113 117.668 48.8483 117.798 50.1504H109.204L109.937 42.7041C110.392 42.6553 110.783 42.5983 111.108 42.5332C111.45 42.4681 111.849 42.403 112.305 42.3379H114.697L116.992 42.7041ZM142.505 60.1113L144.141 59.6475L145.605 58.207L150.391 40.2383L147.559 39.75L143.14 57.2061L142.603 57.4014L141.943 57.2549L137.549 39.75L134.692 40.2383L139.502 58.207L140.942 59.6475L142.505 60.1113ZM145.361 37.5527C147.005 37.5527 148.494 37.7969 149.829 38.2852C151.164 38.7734 152.295 39.4408 153.223 40.2871C154.167 41.1335 154.891 42.1263 155.396 43.2656C155.9 44.3887 156.152 45.585 156.152 46.8545V61.6982C156.152 62.9678 155.9 64.1722 155.396 65.3115C154.891 66.4346 154.167 67.4193 153.223 68.2656C152.295 69.112 151.164 69.7793 149.829 70.2676C148.494 70.7559 147.005 71 145.361 71H137.842C136.198 71 134.709 70.7559 133.374 70.2676C132.039 69.7793 130.9 69.112 129.956 68.2656C129.028 67.4193 128.312 66.4346 127.808 65.3115C127.303 64.1722 127.051 62.9678 127.051 61.6982V46.8545C127.051 45.585 127.303 44.3887 127.808 43.2656C128.312 42.1263 129.028 41.1335 129.956 40.2871C130.9 39.4408 132.039 38.7734 133.374 38.2852C134.709 37.7969 136.198 37.5527 137.842 37.5527H145.361ZM164.795 57.3525V59.9404H178.906V57.3525H173.169V42.3379H178.906V39.75H164.795V42.3379H170.557V57.3525H164.795ZM174.268 37.5527C175.911 37.5527 177.401 37.7969 178.735 38.2852C180.07 38.7734 181.201 39.4408 182.129 40.2871C183.073 41.1335 183.797 42.1263 184.302 43.2656C184.806 44.3887 185.059 45.585 185.059 46.8545V61.6982C185.059 62.9678 184.806 64.1722 184.302 65.3115C183.797 66.4346 183.073 67.4193 182.129 68.2656C181.201 69.112 180.07 69.7793 178.735 70.2676C177.401 70.7559 175.911 71 174.268 71H166.748C165.104 71 163.615 70.7559 162.28 70.2676C160.946 69.7793 159.806 69.112 158.862 68.2656C157.935 67.4193 157.218 66.4346 156.714 65.3115C156.209 64.1722 155.957 62.9678 155.957 61.6982V46.8545C155.957 45.585 156.209 44.3887 156.714 43.2656C157.218 42.1263 157.935 41.1335 158.862 40.2871C159.806 39.4408 160.946 38.7734 162.28 38.2852C163.615 37.7969 165.104 37.5527 166.748 37.5527H174.268ZM207.812 39.75H193.701V42.3379H199.463V59.9404H202.075V42.3379H207.812V39.75ZM203.174 37.5527C204.818 37.5527 206.307 37.7969 207.642 38.2852C208.976 38.7734 210.107 39.4408 211.035 40.2871C211.979 41.1335 212.703 42.1263 213.208 43.2656C213.713 44.3887 213.965 45.585 213.965 46.8545V61.6982C213.965 62.9678 213.713 64.1722 213.208 65.3115C212.703 66.4346 211.979 67.4193 211.035 68.2656C210.107 69.112 208.976 69.7793 207.642 70.2676C206.307 70.7559 204.818 71 203.174 71H195.654C194.01 71 192.521 70.7559 191.187 70.2676C189.852 69.7793 188.713 69.112 187.769 68.2656C186.841 67.4193 186.125 66.4346 185.62 65.3115C185.116 64.1722 184.863 62.9678 184.863 61.6982V46.8545C184.863 45.585 185.116 44.3887 185.62 43.2656C186.125 42.1263 186.841 41.1335 187.769 40.2871C188.713 39.4408 189.852 38.7734 191.187 38.2852C192.521 37.7969 194.01 37.5527 195.654 37.5527H203.174ZM232.08 37.5527C233.724 37.5527 235.213 37.7969 236.548 38.2852C237.882 38.7734 239.014 39.4408 239.941 40.2871C240.885 41.1335 241.61 42.1263 242.114 43.2656C242.619 44.3887 242.871 45.585 242.871 46.8545V61.6982C242.871 62.9678 242.619 64.1722 242.114 65.3115C241.61 66.4346 240.885 67.4193 239.941 68.2656C239.014 69.112 237.882 69.7793 236.548 70.2676C235.213 70.7559 233.724 71 232.08 71H224.561C222.917 71 221.427 70.7559 220.093 70.2676C218.758 69.7793 217.619 69.112 216.675 68.2656C215.747 67.4193 215.031 66.4346 214.526 65.3115C214.022 64.1722 213.77 62.9678 213.77 61.6982V46.8545C213.77 45.585 214.022 44.3887 214.526 43.2656C215.031 42.1263 215.747 41.1335 216.675 40.2871C217.619 39.4408 218.758 38.7734 220.093 38.2852C221.427 37.7969 222.917 37.5527 224.561 37.5527H232.08ZM237.109 43.7051L236.768 41.6543L235.229 40.0918L232.715 39.75H226.172L223.682 40.0918L222.119 41.6543L221.826 43.7051V56.0098L222.119 58.1094L223.73 59.6475L226.172 59.9404H232.715L235.229 59.6475L236.768 58.1094L237.109 56.0098V43.7051ZM234.18 57.1084L232.568 57.3525H226.318L224.731 57.1084L224.365 55.6436V43.9492L224.609 42.6064L226.318 42.3379H232.568L234.277 42.6064L234.521 44.0469V55.7412L234.18 57.1084ZM265.527 43.6562L265.186 41.6055L263.623 40.043L261.133 39.75H255.029L250.635 40.3604V59.9404H253.223V42.6064L255.127 42.2891H260.986L262.671 42.5576L262.915 43.998V59.9404H265.527V43.6562ZM260.986 37.5527C262.63 37.5527 264.119 37.7969 265.454 38.2852C266.789 38.7734 267.92 39.4408 268.848 40.2871C269.792 41.1335 270.516 42.1263 271.021 43.2656C271.525 44.3887 271.777 45.585 271.777 46.8545V61.6982C271.777 62.9678 271.525 64.1722 271.021 65.3115C270.516 66.4346 269.792 67.4193 268.848 68.2656C267.92 69.112 266.789 69.7793 265.454 70.2676C264.119 70.7559 262.63 71 260.986 71H253.467C251.823 71 250.334 70.7559 248.999 70.2676C247.664 69.7793 246.525 69.112 245.581 68.2656C244.653 67.4193 243.937 66.4346 243.433 65.3115C242.928 64.1722 242.676 62.9678 242.676 61.6982V46.8545C242.676 45.585 242.928 44.3887 243.433 43.2656C243.937 42.1263 244.653 41.1335 245.581 40.2871C246.525 39.4408 247.664 38.7734 248.999 38.2852C250.334 37.7969 251.823 37.5527 253.467 37.5527H260.986ZM294.873 57.3525V59.9404H308.984V57.3525H303.247V42.3379H308.984V39.75H294.873V42.3379H300.635V57.3525H294.873ZM304.346 37.5527C305.99 37.5527 307.479 37.7969 308.813 38.2852C310.148 38.7734 311.279 39.4408 312.207 40.2871C313.151 41.1335 313.875 42.1263 314.38 43.2656C314.884 44.3887 315.137 45.585 315.137 46.8545V61.6982C315.137 62.9678 314.884 64.1722 314.38 65.3115C313.875 66.4346 313.151 67.4193 312.207 68.2656C311.279 69.112 310.148 69.7793 308.813 70.2676C307.479 70.7559 305.99 71 304.346 71H296.826C295.182 71 293.693 70.7559 292.358 70.2676C291.024 69.7793 289.884 69.112 288.94 68.2656C288.013 67.4193 287.297 66.4346 286.792 65.3115C286.287 64.1722 286.035 62.9678 286.035 61.6982V46.8545C286.035 45.585 286.287 44.3887 286.792 43.2656C287.297 42.1263 288.013 41.1335 288.94 40.2871C289.884 39.4408 291.024 38.7734 292.358 38.2852C293.693 37.7969 295.182 37.5527 296.826 37.5527H304.346ZM337.793 43.6562L337.451 41.6055L335.889 40.043L333.398 39.75H327.295L322.9 40.3604V59.9404H325.488V42.6064L327.393 42.2891H333.252L334.937 42.5576L335.181 43.998V59.9404H337.793V43.6562ZM333.252 37.5527C334.896 37.5527 336.385 37.7969 337.72 38.2852C339.054 38.7734 340.186 39.4408 341.113 40.2871C342.057 41.1335 342.782 42.1263 343.286 43.2656C343.791 44.3887 344.043 45.585 344.043 46.8545V61.6982C344.043 62.9678 343.791 64.1722 343.286 65.3115C342.782 66.4346 342.057 67.4193 341.113 68.2656C340.186 69.112 339.054 69.7793 337.72 70.2676C336.385 70.7559 334.896 71 333.252 71H325.732C324.089 71 322.599 70.7559 321.265 70.2676C319.93 69.7793 318.791 69.112 317.847 68.2656C316.919 67.4193 316.203 66.4346 315.698 65.3115C315.194 64.1722 314.941 62.9678 314.941 61.6982V46.8545C314.941 45.585 315.194 44.3887 315.698 43.2656C316.203 42.1263 316.919 41.1335 317.847 40.2871C318.791 39.4408 319.93 38.7734 321.265 38.2852C322.599 37.7969 324.089 37.5527 325.732 37.5527H333.252ZM359.302 60.1113L360.938 59.6475L362.402 58.207L367.188 40.2383L364.355 39.75L359.937 57.2061L359.399 57.4014L358.74 57.2549L354.346 39.75L351.489 40.2383L356.299 58.207L357.739 59.6475L359.302 60.1113ZM362.158 37.5527C363.802 37.5527 365.291 37.7969 366.626 38.2852C367.961 38.7734 369.092 39.4408 370.02 40.2871C370.964 41.1335 371.688 42.1263 372.192 43.2656C372.697 44.3887 372.949 45.585 372.949 46.8545V61.6982C372.949 62.9678 372.697 64.1722 372.192 65.3115C371.688 66.4346 370.964 67.4193 370.02 68.2656C369.092 69.112 367.961 69.7793 366.626 70.2676C365.291 70.7559 363.802 71 362.158 71H354.639C352.995 71 351.506 70.7559 350.171 70.2676C348.836 69.7793 347.697 69.112 346.753 68.2656C345.825 67.4193 345.109 66.4346 344.604 65.3115C344.1 64.1722 343.848 62.9678 343.848 61.6982V46.8545C343.848 45.585 344.1 44.3887 344.604 43.2656C345.109 42.1263 345.825 41.1335 346.753 40.2871C347.697 39.4408 348.836 38.7734 350.171 38.2852C351.506 37.7969 352.995 37.5527 354.639 37.5527H362.158ZM394.946 57.3525H385.205V51.1514H393.359V48.5879H385.205V42.3379H394.604V39.75H382.666V59.9404H394.946V57.3525ZM391.064 37.5527C392.708 37.5527 394.198 37.7969 395.532 38.2852C396.867 38.7734 397.998 39.4408 398.926 40.2871C399.87 41.1335 400.594 42.1263 401.099 43.2656C401.603 44.3887 401.855 45.585 401.855 46.8545V61.6982C401.855 62.9678 401.603 64.1722 401.099 65.3115C400.594 66.4346 399.87 67.4193 398.926 68.2656C397.998 69.112 396.867 69.7793 395.532 70.2676C394.198 70.7559 392.708 71 391.064 71H383.545C381.901 71 380.412 70.7559 379.077 70.2676C377.743 69.7793 376.603 69.112 375.659 68.2656C374.731 67.4193 374.015 66.4346 373.511 65.3115C373.006 64.1722 372.754 62.9678 372.754 61.6982V46.8545C372.754 45.585 373.006 44.3887 373.511 43.2656C374.015 42.1263 374.731 41.1335 375.659 40.2871C376.603 39.4408 377.743 38.7734 379.077 38.2852C380.412 37.7969 381.901 37.5527 383.545 37.5527H391.064ZM419.971 37.5527C421.615 37.5527 423.104 37.7969 424.438 38.2852C425.773 38.7734 426.904 39.4408 427.832 40.2871C428.776 41.1335 429.5 42.1263 430.005 43.2656C430.509 44.3887 430.762 45.585 430.762 46.8545V61.6982C430.762 62.9678 430.509 64.1722 430.005 65.3115C429.5 66.4346 428.776 67.4193 427.832 68.2656C426.904 69.112 425.773 69.7793 424.438 70.2676C423.104 70.7559 421.615 71 419.971 71H412.451C410.807 71 409.318 70.7559 407.983 70.2676C406.649 69.7793 405.509 69.112 404.565 68.2656C403.638 67.4193 402.922 66.4346 402.417 65.3115C401.912 64.1722 401.66 62.9678 401.66 61.6982V46.8545C401.66 45.585 401.912 44.3887 402.417 43.2656C402.922 42.1263 403.638 41.1335 404.565 40.2871C405.509 39.4408 406.649 38.7734 407.983 38.2852C409.318 37.7969 410.807 37.5527 412.451 37.5527H419.971ZM424.561 52.2988L424.219 50.1992L422.656 48.6611L420.117 48.3926H414.648L413.159 48.0996C413.078 47.8229 413.021 47.5788 412.988 47.3672C412.956 47.1393 412.899 46.9033 412.817 46.6592V44.0957L413.159 42.6553L414.771 42.3379H420.972L423.267 42.8018L423.853 40.1406L421.021 39.75H414.6L412.158 40.0918L410.571 41.6543L410.254 43.7051V47.0498L410.571 49.1006L412.158 50.6387L414.6 50.9561H420.117L421.606 51.2002C421.655 51.4443 421.712 51.6722 421.777 51.8838C421.842 52.0954 421.899 52.3151 421.948 52.543V55.7412C421.916 55.9528 421.859 56.1807 421.777 56.4248C421.712 56.6689 421.655 56.8968 421.606 57.1084L420.02 57.3525H413.965L411.572 56.9619L410.962 59.5986L413.818 59.9404H420.166L422.656 59.6475L424.219 58.1094L424.561 56.0098V52.2988ZM453.516 39.75H439.404V42.3379H445.166V59.9404H447.778V42.3379H453.516V39.75ZM448.877 37.5527C450.521 37.5527 452.01 37.7969 453.345 38.2852C454.679 38.7734 455.811 39.4408 456.738 40.2871C457.682 41.1335 458.407 42.1263 458.911 43.2656C459.416 44.3887 459.668 45.585 459.668 46.8545V61.6982C459.668 62.9678 459.416 64.1722 458.911 65.3115C458.407 66.4346 457.682 67.4193 456.738 68.2656C455.811 69.112 454.679 69.7793 453.345 70.2676C452.01 70.7559 450.521 71 448.877 71H441.357C439.714 71 438.224 70.7559 436.89 70.2676C435.555 69.7793 434.416 69.112 433.472 68.2656C432.544 67.4193 431.828 66.4346 431.323 65.3115C430.819 64.1722 430.566 62.9678 430.566 61.6982V46.8545C430.566 45.585 430.819 44.3887 431.323 43.2656C431.828 42.1263 432.544 41.1335 433.472 40.2871C434.416 39.4408 435.555 38.7734 436.89 38.2852C438.224 37.7969 439.714 37.5527 441.357 37.5527H448.877Z" fill="white" />
            </svg>
        </motion.div>
    )

}

export default LongLogo