const Union = () => {
  return (
    <>
      <h1>Importar y exportar componentes</h1>
      <p>
        La magia de los componentes reside en su reusabilidad: puedes crear componentes que se
        componen a su vez de otros componentes. Pero mientras anidas más y más componentes, a menudo
        tiene sentido comenzar a separarlos en diferentes archivos. Esto permite que tus archivos se
        mantengan fáciles de localizar y puedas reutilizar componentes en más lugares.
      </p>
      <h3 id="archivo-componente">Exportar e importar un componente</h3>
      <p>
        En <span className={"note"}>Tu primer componente</span>, hiciste un componente{" "}
        <span className={"shadow"}>Book</span> y un componente{" "}
        <span className={"shadow"}>Library</span> que lo renderiza
      </p>
      <p>
        ¿Y si quisieras cambiar la pantalla de inicio en el futuro y poner allí una lista de libros
        científicos? ¿O ubicar todos los perfiles en otro lugar? Tiene sentido mover{" "}
        <span className={"shadow"}>Library</span> y <span className={"shadow"}>Book</span> fuera del
        componente raíz. Esto los haría más modulares y reutilizables en otros archivos. Puedes
        mover un componente en tres pasos:
      </p>
      <ol>
        <li>
          <b>Crea</b> un nuevo archivo JS para poner los componentes dentro.
        </li>
        <li>
          <b>Exporta</b> tu componente de función desde ese archivo (ya sea usando exports{" "}
          <span className={"note"}>por defecto</span> o <span className={"note"}>con nombre</span>).
        </li>
        <li>
          <b>Impórtalo</b> en el archivo en el que usarás el componente (usando la técnica
          correspondiente de importar exports <span className={"note"}>por defecto</span> o{" "}
          <span className={"note"}>con nombre</span>).
        </li>
      </ol>
      <p>
        Aquí tanto <span className={"shadow"}>Book</span> y{" "}
        <span className={"shadow"}>Library</span> se han movido fuera de{" "}
        <span className={"shadow"}>App.js</span> en un nuevo archivo llamado{" "}
        <span className={"shadow"}>Library.js</span>. Ahora puedes cambiar{" "}
        <span className={"shadow"}>App.js</span> para importar{" "}
        <span className={"shadow"}>Library</span> desde <span className={"shadow"}>Library.js</span>
        :
      </p>

      <pre className="ide">
        <span className={"greendark"}>&#47;&#47;</span>
        <span className={"greendark"}>Library.js</span>
        {"\n"}
        <code>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Book</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#123;</span>
          <span className={"blue"}>count</span>,<span className={"blue"}>onClick</span>
          <span className={"yellow"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          &lt;<span className={"blue"}>img</span> <span className={"celeste"}>src</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"orange"}>&quot;https://imgur.com&quot;</span>
          <span className={"blue"}>&#125; </span>
          <span className={"celeste"}>alt</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"orange"}>&quot;imgur&quot;</span>
          <span className={"blue"}>&#125; </span>
          /&gt;;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
        {"\n\n"}
        <code>
          <span className={"pink"}>export </span>
          <span className={"pink"}>default </span>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Library</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          &lt;<span className={"blue"}>section</span>&gt;
          {"\n      "}&lt;<span className={"blue"}>h1</span>&gt;
          <span className="white">Libros increíbles</span>
          &lt;/<span className={"blue"}>h1</span>&gt;
          {"\n      "}
          &lt;<span className={"green"}>Book </span>/&gt;
          {"\n      "}
          &lt;<span className={"green"}>Book </span>/&gt;
          {"\n      "}
          &lt;<span className={"green"}>Book </span>/&gt;
          {"\n    "}
          &lt;/<span className={"blue"}>section</span>&gt;{"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <pre className="ide">
        <span className={"greendark"}>&#47;&#47;</span>
        <span className={"greendark"}>App.js</span>
        {"\n"}
        <code>
          <span className={"pink"}>import </span>
          <span className={"celeste"}> Library </span>
          <span className={"pink"}> from </span>
          <span className={"orange"}>&#39;Library.js&#39;</span>;{"\n\n"}
        </code>
        <code>
          <span className={"pink"}>export </span>
          <span className={"pink"}>default </span>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>App</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          &lt;<span className={"green"}>Library </span>/&gt;
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <p>
        <i>Nota: </i>cómo este ejemplo está ahora descompuesto en dos archivos:
      </p>
      <ol>
        <li>
          Gallery.js
          <ol type={"a"} start="1">
            <li>
              Define el componente Profile que se usa solo dentro del mismo archivo y no se exporta.
            </li>
            <li>Define el componente Gallery como un export por defecto.</li>
          </ol>
        </li>
        <li>
          App.js
          <ol type={"a"} start="1">
            <li>Importa Gallery como un import por defecto desde Gallery.js.</li>
            <li>Exporta el componente raíz App como un export por defecto.</li>
          </ol>
        </li>
      </ol>
      <div className="great">
        <span>📓 Nota</span>
        <span>
          Puede que te encuentres archivos que omiten la extensión de archivo{" "}
          <span className="shadow">.js</span> de esta forma:
        </span>
        <pre className="ide">
          <code>
            <span className={"pink"}>import </span>
            <span className={"celeste"}> Library </span>
            <span className={"pink"}> from </span>
            <span className={"orange"}>&#39;Library&#39;</span>;{"\n\n"}
          </code>
        </pre>
        <span>
          Tanto <span className="shadow">&#39;./Gallery.js&#39;</span> como{" "}
          <span className="shadow">&#39;./Gallery&#39;</span> funcionarán con React, aunque la
          primera forma es más cercana a cómo lo hacen los{" "}
          <span className="note">módulos nativos de ES</span>.
        </span>
      </div>
      <p>
        Hay dos formas fundamentales de exportar valores con JavaScript: exports por defecto y
        exports con nombre. Hasta ahora nuestros ejemplos solo han usado exports por defecto. Pero
        puedes usar uno o ambos en el mismo archivo.{" "}
        <b>
          Un archivo no puede tener más de un export por defecto, pero puede tener tantos exports
          con nombre como desees
        </b>
        .
      </p>
      <img src={"../../public/i_import-export.svg"} alt="ExportImport" />
      <p>
        Cómo exportas tu componente dicta la forma en que debes importarlo. ¡Tendrás un error si
        intentas importar un export por defecto de la misma forma que lo harías con un export con
        nombre!
      </p>
      <pre className="ide">
        <span className={"greendark"}>&#47;&#47;</span>
        <span className={"greendark"}>Por defecto</span>
        {"\n"}
        <code>
          <span className={"pink"}>import </span>
          <span className={"celeste"}> Library </span>
          <span className={"pink"}> from </span>
          <span className={"orange"}>&#39;Library&#39;</span>;{"\n\n"}
        </code>
        <span className={"greendark"}>&#47;&#47;</span>
        <span className={"greendark"}>Por defecto</span>
        {"\n"}
        <code>
          <span className={"pink"}>export </span>
          <span className={"pink"}>default </span>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Library</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
        <hr />
        {"\n"}
        <span className={"greendark"}>&#47;&#47;</span>
        <span className={"greendark"}>Con nombre</span>
        {"\n"}
        <code>
          <span className={"pink"}>import </span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}> Library </span>
          <span className={"blue"}>&#125;</span>
          <span className={"pink"}> from </span>
          <span className={"orange"}>&#39;Library&#39;</span>;{"\n\n"}
        </code>
        <span className={"greendark"}>&#47;&#47;</span>
        <span className={"greendark"}>Con nombre</span>
        {"\n"}
        <code>
          <span className={"pink"}>export </span>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Library</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <p>
        Cuando escribes un import por defecto puedes poner cualquier nombre después de{" "}
        <span className={"shadow"}>import</span>. Por ejemplo, podrías escribir en su lugar{" "}
        <span className={"shadow"}>import Banana from &#39;./Library.js&#39;</span> y aun así te
        daría el mismo export por defecto. En cambio, con los imports con nombre, tiene que haber
        una correspondencia con los nombres en ambos lados. ¡Por eso se llaman exports con nombre!
      </p>
      <p>
        <b>
          Las personas a menudo utilizan exports por defecto si el archivo solo exporta un
          componente, y usan exports con nombre si exporta varios componentes y valores
        </b>
        . Independientemente del estilo de codificación que prefieras, siempre proporciona nombres
        con sentido a las funciones de tus componentes y a los archivos que las contienen.
        Componentes sin nombre como{" "}
        <span className={"shadow"}>export default &#40;&#41; =&gt; &#123;&#125;</span> no se
        recomiendan, porque hacen que la depuración sea más difícil.
      </p>
      <h3 id="exportimportmultiple">Exportar e importar múltiples componentes del mismo archivo</h3>
      <p>
        ¿Y si quisieras mostrar solo un <snap className="shadow">Book</snap> en lugar de toda la
        galería? Puedes exportar el componente <snap className="shadow">Book</snap> también. Pero{" "}
        <snap className="shadow">Library.js</snap> ya tiene un export por defecto, y no puedes tener
        dos exports por defecto. Podrías crear un nuevo archivo con un export por defecto, o podrías
        añadir un export con nombre para <snap className="shadow">Book</snap>.{" "}
        <b>
          ¡Un archivo solo puede contener un export por defecto, pero puede tener múltiples exports
          con nombre!
        </b>
      </p>
      <div className="great">
        <span>📓 Nota</span>
        <span>
          Para reducir la potencial confusión entre exports por defecto y con nombre, algunos
          equipos escogen utilizar solo un estilo (por defecto o con nombre), o evitan mezclarlos en
          un mismo archivo. Es una cuestión de preferencias. ¡Haz lo que funcione mejor para ti!
        </span>
      </div>
    </>
  );
};
export default Union;
