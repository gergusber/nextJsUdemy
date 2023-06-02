import classes from './post-content.module.css'
import PostHeader from './post-header'
import ReactMarkdown from 'react-markdown'

const DUMMY_POST = {
  title: 'React patterns',
  excerpt: 'something for this post',
  image: 'getting-started-nextjs.png',
  slug: 'react-patterns1',
  content: `# Animus cortice nostris Aeginae



  ## Dixit o longas uvae pulmonis iamque bacchantum

  

  Lorem markdownum de equinis crudelis Iunone, eandem poscor est? Per nam prior

  voce canos monstrum mutatis motamque tempora.

  

      function = device_metafile;

      if (modeTarget) {

          wireless_restore_click.powerpoint_wysiwyg_esports(hard(rjSystemIso));

          master_sprite(printClick.pinterest_sync(backlink_webmaster_recursion),

                  43, insertion_apache.os(optical, runtime));

      } else {

          marketSwitch = drive_format_perl + pathTrojanPrinter + wpa(rss, clean);

      }

      encoding += peopleware_model_northbridge.computing.driveIsoPage(

              donationware_smb_ripcording, log_localhost_monochrome * wireless);

      if (50 + powerKeyboardMenu(drive)) {

          icf.basebandAddress = 1;

          compression = 4;

          hard = hibernate_leopard;

      } else {

          dvdGraphics.dimmWebsiteAccess.application(engine(association_javascript,

                  39));

      }

  

  [Non](http://novi.org/summa-pater) Sidonis temone agitata Annus nec se terga

  avellere famulus quater. Si mediis adoleret. Toto tamen traherent, templa

  turbamve non alienae admoto, pendeat aret, quisquis. Suo vidit via, robora satae

  ponderis potentior dilataque locum aureus capiti; [meritisne

  accipit](http://iurabatursaeque.com/spectante.html) carina gessit. [Regnare

  consitaque](http://sanguinequarum.net/hocvocatus.php) flebile, at imis aliqua ex

  pignora membris residunt, alma!

  

  ## Iam Mycale putabat vectus

  

  In perdere Tityos cunctis, Meleagron stridentemque violavit mane secuta,

  Prochytenque fata accessit vulnere Pelasgos sub, sata. Erat vide, gelidumque

  eras, sint et tenebant iram, fata. Somnoque [finibus Iovi

  domino](http://quondam-sic.org/), quoque **olor** micantes te movit at lumine.

  Oro est arboris *damni* manus agros deorum Dardaniam margine Thebis. Unde locus

  et auras erat, qua metuenda sinistro praetincta gyrum virgo vinco innumeras

  secum, tristis auctore.

  

  > Commisso hunc quoque nymphas [bacchaeque Midan

  > iugulo](http://neptuniamaturus.com/) viridem. Addidit lingua pugnandi coercet

  > pharetramque gens ab Marte genitus ut Tethys aetas adhuc belli insequitur

  > exhortor circumstant sacras. Armataque Tritonida parentum Phoebeos heros,

  > Scyllae **ponunt**; facile nando, se sic ego equis relictum brevibus. Occupat

  > Prytaninque erant.

  

  Elidunt illi. Tamen etiamnum sinit; est at debere coniunx *carmina opus* pro

  gravis tempora Echo conciperet mutabile quam ministrae. Tenues solacia credas

  remollescunt Iolaus.

  

  ## Cum aequos stabat

  

  Suis veteres tela matres iniusta Iolaus, viridem in ventis candescere. Facta

  resumptis demisso Anius.

  

  1. Manum noscit

  2. Morte classem

  3. Non non sic vestes funes suum ipse

  4. Videtur divis quod fluit

  5. Ardua sitimque inminet

  

  Satis facto [fallis vidit lacrimae](http://ubi-laetior.org/) aurea, vota

  radiantis quos **undis vestrae**, iam longius; *captus*. Enim Libycas et Aurora

  cum tardatus Latio alba color! Spicula posse ego purpureus movit saxi pars

  dryadas duris quas secum solo nobis nunc debes?`,
  date: '2022-01-01'
}



const PostContent = (props) => {
  const { post } = props
  const { title, content, image, slug } = post
  const imagePath = `/images/posts/${image}`
  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </article>
  )
}



export default PostContent