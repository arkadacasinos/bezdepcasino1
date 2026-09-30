import { BonusGuide } from '@/components/bonus-guide'
import { SiteFooter } from '@/components/site-footer'

export const dynamic = 'force-static'

export default function Page() {
  return (
    <>
      <a className="bdx7-skip" href="#main">Перейти к содержанию</a>
      <header id="top" className="bdx7-header bdx7-wrap">
        <a className="bdx7-brand" href="#top" aria-label="BezdepCasino — главная"><span className="bdx7-brand-mark" aria-hidden="true">B<span>·</span></span>Bezdep<span>Casino</span></a>
        <nav className="bdx7-navigation" aria-label="Основная навигация">
          <a href="#basics">О бонусах</a>
          <a href="#registration">Как получить</a>
          <a href="#checklist">Что проверить</a>
        </nav>
        <span className="bdx7-age">18+</span>
      </header>
      <main id="main">
        <section className="bdx7-hero bdx7-wrap" aria-labelledby="hero-title">
          <header className="bdx7-hero-copy">
            <p className="bdx7-kicker"><span aria-hidden="true" /> НЕЗАВИСИМЫЙ ГИД ПО БОНУСАМ</p>
            <h1 id="hero-title">Бонус без<br />депозита.<br /><span>Без иллюзий.</span></h1>
            <p className="bdx7-intro">Бездепозитные бонусы простыми словами.<br className="bdx7-desktop-break" /> Разбираемся, как получить подарок и что<br className="bdx7-desktop-break" /> скрывается за красивым предложением.</p>
            <nav className="bdx7-hero-actions" aria-label="Начать чтение">
              <a className="bdx7-action" href="#guide">Разобраться в бонусах <span className="bdx7-arrow" aria-hidden="true" /></a>
              <a className="bdx7-text-link" href="#checklist">Чек-лист игрока <span aria-hidden="true">↓</span></a>
            </nav>
            <p className="bdx7-small-note">Без рейтингов «лучших». Без обещаний выигрыша.</p>
          </header>
          <figure className="bdx7-hero-art">
            <img src="/images/bonus-art.webp" width="960" height="640" alt="Открытая синяя подарочная коробка, фишки и игральные кости" fetchPriority="high" decoding="async" />
            <figcaption><span className="bdx7-caption-icon" aria-hidden="true">!</span>Без пополнения <span aria-hidden="true">≠</span><span className="sr-only">не означает</span> без условий</figcaption>
          </figure>
        </section>
        <aside className="bdx7-principles bdx7-wrap" aria-label="Принципы гида">
          <section><span className="bdx7-principle-icon" aria-hidden="true" /><p><strong>Понятный язык</strong><span>Никаких сложных терминов</span></p></section>
          <section><span className="bdx7-principle-icon" aria-hidden="true" /><p><strong>Условия на первом месте</strong><span>Вейджер, сроки и лимиты</span></p></section>
          <section><span className="bdx7-principle-icon" aria-hidden="true" /><p><strong>Ответственный подход</strong><span>Игра — не способ заработка</span></p></section>
        </aside>
        <BonusGuide />
        <section id="checklist" className="bdx7-checklist bdx7-wrap" aria-labelledby="checklist-title">
          <figure className="bdx7-check-art"><img src="/images/guide-art.webp" width="600" height="400" alt="Синий планшет с отметками проверки и жёлтый карандаш" loading="lazy" decoding="async" /></figure>
          <header className="bdx7-check-copy">
            <p className="bdx7-eyebrow">СОХРАНИТЕ ПЕРЕД ИГРОЙ</p>
            <h2 id="checklist-title">Минута на проверку.<br />Меньше сюрпризов.</h2>
            <ul>
              <li>Проверьте лицензию и доступность в вашей стране.</li>
              <li>Прочитайте вейджер, сроки и ограничения вывода.</li>
              <li>Заранее установите лимит времени и расходов.</li>
            </ul>
            <a className="bdx7-text-link" href="#withdrawal">Подробнее об условиях <span className="bdx7-arrow" aria-hidden="true" /></a>
          </header>
        </section>
        <aside className="bdx7-responsible bdx7-wrap" aria-label="Ответственная игра">
          <span className="bdx7-age">18+</span>
          <p><strong>Играйте осознанно.</strong> Азартные игры могут вызывать зависимость. Не пытайтесь отыграться. Если трудно остановиться, используйте самоисключение и обратитесь за помощью к специалисту.</p>
        </aside>
      </main>
      <SiteFooter />
    </>
  )
}
