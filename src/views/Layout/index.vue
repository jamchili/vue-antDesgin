<script setup lang="ts">
import Menu from './components/menu/index.vue'
import Header from './components/header/index.vue'
import { useSiderbarStore, useUserStore } from '@/stores'

const siderbarStore = useSiderbarStore()

const userStore = useUserStore()
</script>

<template>
  <div>
    <el-container class="layout-container-demo">
      <el-aside :width="siderbarStore.isShowSiderbar ? '200px' : 'auto'"> <Menu></Menu></el-aside>
      <el-container>
        <el-header class="backdrop-blur-sm">
          <Header></Header>
        </el-header>
        <el-main
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum temporibus, tempore
          commodi quisquam eos doloremque culpa atque nostrum in obcaecati ut magni, consequatur,
          ipsam consectetur a! Ea accusamus maiores consequuntur. Aspernatur molestiae molestias
          sunt id dolorem. Officia in nesciunt culpa eligendi odio delectus cupiditate nulla a
          aspernatur nisi, ullam commodi illo labore, enim suscipit laborum tempora quae, est veniam
          praesentium! Nemo molestias autem enim consequuntur? Maiores quisquam totam a? Facilis,
          doloribus consequatur? Eligendi aspernatur voluptate, voluptatum corporis consectetur quo
          dolorem natus laborum eaque fugit aliquid aliquam! Hic assumenda dignissimos at. Fugit
          aliquam amet magni magnam neque consequatur dolor minus voluptatem minima. Debitis quis
          eligendi itaque accusamus est eaque consequatur officiis eveniet assumenda architecto
          explicabo quisquam, harum blanditiis accusantium hic impedit. Atque obcaecati odit minima
          iure dignissimos sint, quas deleniti. Suscipit sit molestiae assumenda hic dolorum maiores
          aut molestias itaque dolores. Minus dolores sunt ad a quisquam facilis explicabo sit
          aliquid. Vitae dolorem alias, consectetur tempora accusantium atque illum, consequatur
          tempore commodi ex nemo quaerat nobis velit iste assumenda unde tenetur blanditiis
          nesciunt! Odit fugit neque officiis! Itaque nostrum non ex. Nisi sunt provident, porro
          cumque saepe quaerat dolor. Obcaecati, autem? Maiores perferendis laboriosam illum
          voluptatem tempore quos quas ipsam. Cum praesentium ipsam quibusdam perspiciatis id illum
          delectus eius eum expedita. Voluptas, officiis harum consequatur delectus tempora tenetur
          ipsa provident ipsum maxime! Impedit dignissimos qui ex eveniet sed in iusto nesciunt
          blanditiis natus, necessitatibus labore alias, ea aut aliquam, recusandae odio. Cum ipsam
          labore reiciendis voluptas rem consequatur deleniti eos sed ipsa. Nihil, harum expedita
          placeat, cupiditate eum quae provident aliquid dolores, facilis corporis ipsa quas dicta
          atque sint ipsum quam. Velit quia quasi mollitia nihil, reiciendis earum eveniet, enim ea
          iusto dolor excepturi deserunt placeat veritatis consequuntur repellat! Sed tempora libero
          voluptatum aliquid vel amet exercitationem culpa veniam mollitia numquam! Itaque
          excepturi, unde animi expedita sit distinctio magnam impedit sequi vero tempore quisquam!
          Suscipit ducimus perferendis sequi quo commodi. Nobis reiciendis commodi cum non,
          exercitationem et saepe. Excepturi, officiis totam. Quaerat distinctio nam est beatae,
          officia omnis id veniam quos? Dolore modi, tempora cupiditate hic illum veritatis libero,
          dolor nam architecto id nobis provident, laudantium eveniet autem? Sed, ratione debitis?
          Provident debitis facilis assumenda? Voluptatum doloribus delectus modi hic, suscipit sunt
          dolorem quas praesentium! Accusantium ipsum cumque ab modi eveniet laudantium pariatur non
          vitae? Magni corporis eius suscipit quas velit? Sunt temporibus aspernatur placeat
          excepturi autem nobis recusandae suscipit ipsum magni illum! Perspiciatis, delectus.
          Quidem, neque, quia quisquam dolores hic obcaecati molestias voluptas voluptates corporis
          quis dolorum totam, repellat culpa. Illum possimus eligendi illo velit tenetur recusandae
          tempore maxime dignissimos iure corrupti sequi, temporibus architecto eum exercitationem
          eveniet! Asperiores, veritatis iste eligendi deserunt voluptas temporibus vitae inventore
          eos. Veritatis, unde? Blanditiis soluta voluptatum reprehenderit, alias accusantium ea
          itaque facere! Eos nulla eligendi eius assumenda, doloribus aliquid consectetur? Dicta, at
          amet! Beatae voluptatem in, veritatis necessitatibus consequatur blanditiis quos alias
          possimus? Eveniet repellendus sunt excepturi non consequuntur harum id distinctio quia
          deleniti obcaecati possimus ipsa accusantium voluptatem et ratione veritatis at odio unde,
          deserunt nostrum explicabo ipsum nobis? Minus, quis suscipit. Quasi suscipit nobis beatae,
          harum blanditiis accusantium dolores! Dolor, quaerat. Nihil in fugiat, blanditiis deserunt
          facilis, asperiores similique amet, ea cupiditate voluptatum esse repellat reiciendis quae
          totam necessitatibus unde iure. Similique repellat quam labore fugiat ipsa ducimus iure
          facilis rerum? Non, quaerat neque. Ratione dolores vel distinctio quae. Quod quas neque
          cupiditate dolor blanditiis adipisci, minima eaque qui unde quis. Nesciunt, magnam
          repellat. Beatae alias vel sint tempora maxime. Ullam dolorem, reprehenderit natus rem
          maiores rerum tempore totam dolore a magnam tenetur aliquid, quidem eaque necessitatibus
          ex esse officiis at? Reiciendis, aliquid dolores tenetur quae, soluta recusandae earum
          voluptatem laboriosam voluptate excepturi molestias alias facilis distinctio. Reiciendis
          odio ad blanditiis repellendus itaque quisquam, fugiat ipsa. Autem amet cupiditate nihil
          illo! Ex ea ipsam repudiandae nihil quasi voluptas, recusandae tempore impedit atque.
          Veritatis inventore ratione placeat necessitatibus eum repellat rerum amet eaque corrupti
          repellendus rem, ea officiis dignissimos, minima ex consectetur! Nam quas maiores in sed
          laborum eveniet vitae quibusdam, repudiandae officiis tempora pariatur. Illum eveniet
          exercitationem consequuntur magni, similique provident velit doloribus excepturi
          asperiores impedit tenetur vel, necessitatibus ullam corporis! Beatae nihil veritatis
          labore officiis fuga quod, architecto libero quasi assumenda. Ad nisi ipsam expedita!
          Quaerat magni laudantium, doloremque vel modi ab consectetur expedita blanditiis minus
          quia debitis eveniet sequi! Dolore ipsum cum officiis a neque quod at veritatis velit
          similique. Deserunt obcaecati in, accusantium quis quibusdam rem distinctio quod
          veritatis, illum dolor sint quae repudiandae odit beatae saepe quisquam. Fugiat sint
          provident saepe, voluptatibus rem perferendis, eos dolorem velit excepturi quia incidunt
          labore pariatur quae nihil ratione, optio tempore molestias eligendi aliquid molestiae
          nemo iure odit cupiditate nam. Saepe! Vitae itaque aperiam culpa pariatur accusamus. Harum
          dolores inventore sapiente minus distinctio beatae! Doloremque suscipit atque impedit quam
          aliquam quia reiciendis possimus asperiores. Non vel, consectetur cupiditate nostrum
          voluptatum assumenda! Quae nesciunt quisquam sequi, architecto necessitatibus, ipsum alias
          aspernatur maiores laborum iure enim, earum illo tenetur maxime ullam voluptatum
          consequatur fugit voluptatem perspiciatis nisi omnis beatae aliquam! Quidem, ad a.
          Necessitatibus quidem deserunt itaque adipisci ducimus vero debitis sit nihil dicta,
          tempore facilis explicabo rerum deleniti sint impedit perspiciatis assumenda voluptas ipsa
          quia reiciendis nemo optio harum molestias hic. Accusamus. Commodi perferendis in nisi
          facere maiores necessitatibus atque culpa tenetur dignissimos. Quibusdam dicta maiores
          amet asperiores ut, magnam quaerat ullam ipsum porro exercitationem eveniet harum, eos
          nemo ex molestiae sapiente! Nihil placeat omnis earum ratione quibusdam sunt consequatur
          ex necessitatibus exercitationem doloremque? Eligendi eos nesciunt quae, explicabo ea
          libero delectus qui cumque magnam ullam, repellat, a corporis placeat ipsam illum? Unde in
          corrupti quaerat. Repudiandae numquam alias minus. Nobis quos ipsam ut quod obcaecati vero
          voluptate dolorum similique distinctio non expedita, magnam molestias quisquam nemo.
          Consequatur quibusdam culpa rem quasi? Obcaecati enim totam cupiditate, similique
          accusantium delectus aperiam eos doloremque ab consequuntur corporis est dignissimos
          earum, quis illum vero quae excepturi, debitis neque. Blanditiis impedit autem numquam
          laborum, vel dicta? Minus animi tempora ducimus incidunt. Nisi iure optio voluptates ab
          tempore deserunt eaque magnam, ipsum id quo modi, natus sequi cumque laborum voluptatibus,
          commodi eligendi explicabo exercitationem eius consectetur ipsa! Maiores aliquam
          necessitatibus repudiandae veniam illum quasi vero quia debitis eveniet mollitia! Autem
          dolorem ex inventore, amet nemo provident laboriosam, repudiandae enim incidunt itaque
          corrupti, suscipit minus at nisi vero? Labore dolores, quia quas modi minus error,
          adipisci totam facilis voluptatum distinctio non possimus placeat rerum qui quo, esse
          reprehenderit! Labore dicta officiis eligendi sit nesciunt delectus similique ab
          accusamus! Rerum illo laudantium cupiditate nesciunt est praesentium voluptas ab maiores
          ut ipsa odit deserunt quod id dignissimos minus veniam libero, dolore consequuntur aperiam
          ducimus sunt saepe beatae eligendi. Illum, dignissimos! Quam unde pariatur aliquid odit
          nihil, quibusdam at provident corrupti ut. Officia quo blanditiis nam id rem alias porro
          illum eligendi molestiae eius, qui voluptates et illo dolores aspernatur? Sunt.
          Consequuntur voluptatem, necessitatibus explicabo quos nisi, illum debitis accusamus sequi
          deleniti, beatae possimus minima reprehenderit eaque aperiam perferendis inventore
          architecto nemo. Quas perspiciatis quia explicabo architecto earum eveniet minus velit!
          Facere reprehenderit soluta hic, accusamus animi expedita sit inventore voluptatum debitis
          rerum non tempore tempora distinctio voluptas iusto excepturi deserunt omnis consequuntur
          minus ab alias molestiae. Maxime nobis nulla quaerat. Rerum, ad aliquid. Eos aperiam
          doloremque dolores delectus! Natus error obcaecati reprehenderit ad, pariatur
          necessitatibus explicabo aperiam! Dolore consectetur, maxime eum debitis nobis eius at
          ratione. Blanditiis laboriosam aperiam amet. Cupiditate, ullam non blanditiis odio sint,
          quidem neque voluptas unde alias quibusdam harum sit! Dolorum officia natus fugiat vitae
          provident tenetur, ipsam hic quod. Vel itaque enim illo sapiente eius. Necessitatibus est
          totam nesciunt magnam ab corrupti officiis dignissimos blanditiis, cupiditate earum quam,
          praesentium neque maxime qui voluptatem ad! Expedita beatae tenetur velit rerum officia
          cum nihil a distinctio maiores! Consequuntur illum sapiente esse enim blanditiis. Corrupti
          exercitationem, repudiandae modi beatae similique eligendi architecto praesentium! Dolore,
          reiciendis, natus harum quod ea quis sunt mollitia quibusdam quam vel nam cumque unde!
          Placeat reiciendis unde necessitatibus enim, dolorem architecto velit vitae cupiditate
          fugit culpa repellendus nisi sed vel, perspiciatis sint porro corrupti nemo id veritatis
          incidunt nihil. Corporis minima nisi dolorum quo. Eum, asperiores ab! Sequi tenetur
          praesentium non delectus repudiandae deserunt nam autem minima. Autem vitae modi, aliquid
          quia ipsam minima quisquam necessitatibus itaque nostrum enim, animi repellendus debitis
          ut mollitia. Aperiam nam architecto quis magnam similique veritatis iusto rerum facere
          blanditiis ratione officia qui, tempore in maiores est nobis. Porro doloribus, atque
          architecto quos aliquid veritatis sit repellendus suscipit tempora. Perspiciatis, quos
          repellat, veniam ad quaerat earum nemo eius harum vitae reiciendis beatae sed odit
          tempore. Vel recusandae voluptatibus ea labore aperiam veritatis eius cupiditate nulla
          repudiandae voluptatum. Sed, officiis. Dignissimos architecto obcaecati accusantium
          dolorum atque illum. Quidem ipsa consequatur quos commodi! Ipsam, perspiciatis? Cum ab
          numquam, porro debitis eius quia temporibus reiciendis alias quisquam odio beatae animi
          assumenda eos. Corrupti quia repellendus, quisquam consequatur eligendi vero dolorum odio,
          mollitia quae maiores, consectetur expedita! Atque, possimus temporibus, dolorum
          necessitatibus quas neque tempora blanditiis adipisci eveniet, praesentium inventore
          deserunt voluptatem odio! Cumque facilis molestias praesentium eveniet nisi quod beatae,
          similique soluta quibusdam! Repellat, quia at, qui minus reiciendis et hic tempora magni
          voluptatem a ab nulla facilis fuga, repellendus odio deleniti? Eaque omnis natus quia
          praesentium temporibus, voluptatem voluptate, soluta est facilis magni officia, pariatur
          odio qui. Animi quam, non minus sequi, necessitatibus soluta nesciunt fuga accusamus
          pariatur iure impedit beatae! Ipsam beatae fugit aliquid architecto, dolor rerum omnis
          mollitia repellat ipsum et! Rem exercitationem magnam incidunt porro, ullam ea laborum?
          Nulla quibusdam eligendi cupiditate ullam dolore! Quibusdam voluptatum dolore amet.
          Recusandae, reprehenderit dolores doloribus optio quo iure quas eos mollitia repellat
          laboriosam architecto repudiandae, tempore nobis, totam dolore. Voluptatem, officiis!
          Tenetur mollitia reiciendis dolores, consequatur illo deserunt placeat ipsam quod!
          Voluptas excepturi atque minus labore ipsa dignissimos obcaecati id repellat quo vero,
          quidem ducimus voluptate. Quas, molestiae fugit iste perspiciatis reprehenderit corrupti,
          exercitationem necessitatibus architecto commodi quae, officia fuga facere! Minima cumque
          aspernatur mollitia, vero aliquam quis nulla porro voluptatem enim! Nobis similique quidem
          perferendis veniam placeat odit cumque id blanditiis. Nisi, saepe? Qui harum nam dolor
          earum voluptatum veniam. Necessitatibus vero eum error quam nihil facilis totam omnis
          voluptatem fugiat mollitia. Quas, architecto itaque mollitia non alias dolore cum tenetur
          possimus iusto earum delectus sit sed omnis vero ut. Dolore minus fuga assumenda
          voluptates quam eum odit perferendis cupiditate a rem provident dolores eveniet,
          voluptatum ut maiores veritatis saepe expedita non similique? Repellendus nihil illo rem
          quis totam fuga. Perspiciatis modi consequuntur inventore repellendus? Error voluptatibus
          dolorem earum suscipit expedita quibusdam minus ullam sapiente ad consequuntur alias
          maiores, magnam quaerat, et omnis iure blanditiis aliquam sequi nihil officia soluta.
          Laborum ratione, quod suscipit distinctio inventore ipsam eos ea sed nisi quibusdam
          perferendis facere. Sit hic quia, velit in vel ea ratione nihil odio dicta, tenetur id
          minus non debitis! Fuga nisi, obcaecati soluta necessitatibus quod enim vitae tempora
          mollitia incidunt itaque ipsam ipsum culpa nulla eveniet temporibus aliquam excepturi?
          Iure rerum voluptates non. Ad voluptatem facilis non corporis consequatur. Quos vel cumque
          consectetur inventore quo. Enim minima, voluptatum ex iusto possimus, quasi minus, eum
          praesentium laudantium dolorum tempora laboriosam numquam dolores recusandae. Animi itaque
          deleniti autem ad adipisci hic. Veritatis maiores rem, autem omnis numquam tempore saepe
          praesentium laudantium eligendi quibusdam, minus repellendus possimus alias consectetur
          hic dolores, nostrum iste! Nulla laboriosam aspernatur ullam delectus expedita, accusamus
          exercitationem animi! A maxime distinctio odit placeat itaque. Saepe voluptas magnam
          fugiat dignissimos provident, expedita qui debitis ex unde, placeat nostrum voluptatem
          voluptates enim maiores necessitatibus quae nesciunt alias culpa repudiandae nam. Cum quos
          temporibus quasi autem ut distinctio aliquid fuga voluptatibus doloremque! Molestiae
          architecto quibusdam deleniti accusantium, porro ipsum! Modi cupiditate atque soluta
          quisquam blanditiis dolores excepturi nesciunt nihil non! Quo? Officiis aspernatur enim
          alias ratione nesciunt dolor sequi consequuntur id molestiae a pariatur, quo eos fugit
          iste libero iusto eius quod illo harum laborum debitis? Eos, rerum. Perspiciatis, enim
          sit. Quasi nam voluptates reprehenderit magnam minima perspiciatis quas voluptate deleniti
          a! Rem autem dignissimos fuga! Minima odit corrupti, tempora eius accusamus itaque,
          corporis quidem ducimus velit saepe delectus rem impedit? Beatae, reprehenderit. Error
          accusamus autem deserunt quos ad. Sit obcaecati nulla hic. Ipsum facere quibusdam odit
          minus pariatur veritatis repellat sit id, alias, provident numquam? Earum consectetur
          voluptatibus nemo provident! Dolore quos molestiae sunt aliquam. Eius odit sunt fugiat at,
          in minus nisi dignissimos doloremque ipsam perspiciatis mollitia quos ex, exercitationem
          numquam voluptatibus quaerat ab eum asperiores, reprehenderit dolorem tempora? Incidunt
          natus, laudantium, reprehenderit quibusdam in ipsa non qui doloribus animi voluptatibus
          aspernatur recusandae eius consectetur neque cumque ipsam omnis, aut expedita unde! Unde
          optio hic reiciendis, eveniet nesciunt officia. Nemo eius mollitia tempora cupiditate
          voluptatem distinctio et ex maxime dolorem eum neque doloremque assumenda deserunt
          accusamus debitis cum ab repellendus totam architecto numquam sit, quod recusandae
          incidunt? Labore, ullam. Ullam ea tempora at labore aperiam asperiores animi in eveniet
          voluptates mollitia? Iusto earum doloremque porro, dicta eos assumenda odio. Impedit
          officia commodi laborum veritatis vitae, quasi nobis quam minima. Libero vel velit
          incidunt magnam fugiat pariatur aperiam animi dolore placeat sunt earum tempora expedita
          consequuntur aliquid quae esse delectus, quibusdam recusandae tempore quaerat quod
          blanditiis! Recusandae animi debitis dolores? Libero rerum nam modi quos nobis nihil iure,
          minima doloribus? Placeat ipsam repudiandae officia quam numquam ipsa soluta laboriosam
          explicabo animi impedit earum, laudantium doloremque minus minima hic aliquid! Mollitia.
          Culpa dolore tenetur eaque atque? Cupiditate magnam eum distinctio, labore molestiae
          ducimus illo saepe dolore culpa eaque quasi porro repellendus libero, voluptatum rem harum
          hic magni ipsam nobis aut dolorum. Blanditiis debitis quae commodi reprehenderit enim
          soluta culpa ipsam ducimus totam iure, repellendus doloremque alias, pariatur assumenda,
          quaerat repellat consequuntur explicabo. Libero consequatur sequi repellendus quae, vitae
          iure inventore voluptatem! Eaque ut cum, expedita a sit hic voluptates nam ullam
          praesentium similique non aspernatur rem odit, omnis doloremque dolores temporibus, itaque
          eveniet blanditiis perspiciatis maiores? Aut, maiores. Rem, quia eligendi! Dolores,
          sapiente fugit. Ea deleniti minus fuga? Eum, obcaecati. Vel sunt corporis magnam eaque
          quos eligendi voluptatibus et enim similique recusandae, consequuntur impedit nam
          accusamus tempore dignissimos blanditiis! Nulla, voluptate. Magnam sequi ab, iusto
          accusamus architecto minima harum deleniti explicabo impedit expedita nihil inventore
          officia. Animi architecto ex perspiciatis, eum repudiandae in repellendus dicta
          asperiores, atque, est omnis iusto mollitia? Quidem optio aliquid explicabo qui, officia
          porro similique ullam obcaecati alias aperiam soluta assumenda sit magni, sint maxime
          nobis architecto eligendi quam quae quos corrupti, eveniet quas! Totam, voluptas facilis!
          Ipsam, id? Cumque nisi ea eligendi quae, libero neque esse nobis mollitia voluptas earum
          asperiores suscipit dolores dolore molestiae fugiat quo labore ad provident? Libero sequi
          voluptatem nisi recusandae facilis. Eius aut, in eveniet optio eos labore doloremque hic
          doloribus quaerat esse corporis ab rerum eligendi, neque voluptates nisi, itaque quam. Est
          nesciunt ut quia minus voluptas ipsam tempora eligendi? Quo nesciunt, est consequatur
          fugit, praesentium unde necessitatibus doloribus ipsum, reiciendis blanditiis inventore
          totam fuga! Quis provident iusto qui corporis sequi fugit inventore eaque, aliquam ullam
          dignissimos, excepturi nemo architecto? Quae repellendus quas sapiente sit harum culpa
          asperiores voluptas veniam accusantium reiciendis nam expedita eos necessitatibus in
          iusto, ullam a, sint assumenda rem architecto? Iure quae placeat illum accusantium totam.
          Cumque deserunt veniam adipisci ullam vitae. Ab molestias corporis a alias laborum minima
          possimus quo, omnis provident fugiat. Cupiditate quis eligendi asperiores modi officiis
          saepe, consequatur culpa nemo id est. Omnis atque itaque, ipsam accusantium quidem dicta.
          Eius vitae, animi blanditiis sit explicabo asperiores delectus neque nemo laboriosam sequi
          deleniti sapiente veniam alias exercitationem atque nulla, accusantium repudiandae, fugiat
          consequatur! Optio similique molestiae omnis ex praesentium est magnam beatae voluptas
          itaque enim debitis reiciendis cumque voluptatem odio quam suscipit qui sed iusto saepe,
          tenetur, error ratione. Id facere adipisci impedit? Eaque laudantium voluptate non,
          corrupti veritatis culpa cupiditate similique voluptas. Deleniti totam corrupti animi
          error quo, molestias laboriosam provident fugit enim! Quibusdam est dicta aperiam fugit
          quis hic magnam labore. Dolores sed quod minus impedit voluptas consectetur consequatur
          illum? Dignissimos facere laborum enim deleniti iure in consequuntur quis, esse, ratione
          perferendis repellat temporibus fugit incidunt vel. Dicta repellat facilis rem? Eveniet
          consequuntur magni animi quidem? Voluptas aperiam debitis quisquam modi vel pariatur ipsa
          ipsam, corporis, dicta, non dolore animi perspiciatis. Totam at consequuntur minima soluta
          eaque necessitatibus ea ratione hic. Eum quisquam odit delectus non maiores fugiat culpa
          quia odio sapiente pariatur quo ex minus optio incidunt voluptatem qui error debitis
          nostrum perferendis architecto ipsam, tempore totam repellat accusamus! Consequatur! Unde
          enim dolor illo nobis possimus voluptate facilis quasi incidunt delectus! Ipsum doloremque
          est nisi. Molestias, sit ea culpa laboriosam maxime fuga odit in! Voluptas deleniti minima
          laborum sunt odit! Reprehenderit excepturi esse adipisci maxime debitis saepe aliquid a
          quam autem ad omnis soluta cum ullam aliquam dolor quae recusandae atque, aspernatur quo
          eveniet amet illo dolore ea voluptatum. Vero! Perspiciatis cumque unde asperiores officiis
          assumenda culpa quae at beatae. Cupiditate quaerat itaque eius facilis consequatur. Ut
          quod nulla sint? Impedit corrupti eligendi, explicabo deserunt minus fugit ipsam ratione
          unde! Distinctio sapiente praesentium repellat dignissimos corrupti natus blanditiis unde,
          nulla sit impedit ipsum doloremque? Quas nemo eaque doloribus veniam pariatur amet
          recusandae inventore, modi, qui consequatur, quaerat sit ducimus at. Quia quasi aperiam
          pariatur quos explicabo dolorem quibusdam. Excepturi quidem consequatur, cum quis sit
          provident quod reprehenderit illo accusantium iure blanditiis alias, praesentium harum?
          Voluptas cumque odit dolorem eveniet hic? Expedita consectetur corrupti debitis alias in
          natus non impedit labore, pariatur sit eius sint odit et consequatur fuga at illo a?
          Explicabo dolor incidunt maiores exercitationem soluta, quos est perspiciatis? Quaerat,
          hic? Fuga, aut maiores veritatis corporis laboriosam facere facilis quaerat eligendi
          inventore ipsum et voluptatum ea minus saepe? Molestiae animi quasi architecto omnis,
          iusto quas hic ad explicabo dignissimos. Vero iste, hic facere explicabo alias
          perspiciatis cumque recusandae obcaecati beatae iure. Commodi nostrum accusantium dolor,
          sint at rerum et quam esse voluptates earum enim, in suscipit fugiat ullam minima?
          Temporibus rerum velit autem explicabo qui mollitia ullam, adipisci sed molestias corrupti
          aliquid aut quibusdam tenetur dolorum est reiciendis maiores voluptate error omnis ipsum
          eligendi earum? Delectus dicta sit repellat?</el-main
        >
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.layout-container-demo {
  height: 100vh;
}

.layout-container-demo .el-menu {
  border-right: none;
}
</style>
