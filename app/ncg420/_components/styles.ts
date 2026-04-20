const STYLES = `
/* ─── reset ─── */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

/* ─── shared textures ─── */
.paper-bg {
  background-color: #F4EDE4;
  background-image:
    radial-gradient(circle, rgba(0,0,0,0.02) 1px, transparent 1px);
  background-size: 5px 5px;
}
.grid-overlay {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image:
    linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
  background-size: 48px 48px;
}

/* ─── width gate ─── */
.gate {
  position:fixed;inset:0;display:flex;flex-direction:column;
  align-items:center;justify-content:center;z-index:9999;
  text-align:center;padding:2rem;
}
.gate__title {
  font-family:var(--font-hand),cursive;font-size:1.8rem;
  color:#2D2D2D;margin-bottom:.6rem;
}
.gate__sub {
  font-family:var(--font-body),sans-serif;font-size:.9rem;
  color:#8B8680;line-height:1.7;
}

/* ═══════════════════════════════════════════
   LOCK SCREEN
   ═══════════════════════════════════════════ */
.lock {
  position:fixed;inset:0;display:flex;align-items:center;
  justify-content:center;z-index:1000;overflow:hidden;
  transition:opacity .8s ease,transform 1.2s cubic-bezier(.4,0,.2,1);
}
.lock--out { opacity:0; transform:scale(1.3); pointer-events:none; }

.lock__body {
  text-align:center;z-index:10;
  animation:fadeUp .8s ease forwards;
}
.lock__stamp {
  display:inline-block;
  font-family:var(--font-mono),monospace;font-size:.6rem;font-weight:700;
  letter-spacing:.3em;color:#C4635A;text-transform:uppercase;
  border:2px solid #C4635A;padding:.35rem 1.2rem;
  border-radius:3px;margin-bottom:1.8rem;
  transform:rotate(-2deg);
}
.lock__title {
  font-family:var(--font-hand),cursive;font-size:2.8rem;
  color:#2D2D2D;margin-bottom:.4rem;line-height:1.2;
}
.lock__desc {
  font-family:var(--font-body),sans-serif;font-size:.85rem;
  color:#8B8680;margin-bottom:2.5rem;
}
.lock__hint {
  font-family:var(--font-body),sans-serif;font-size:.75rem;
  color:#B5AFA8;margin-top:1.8rem;
}

/* ─── passcode boxes ─── */
.passcode {
  display:flex;gap:10px;justify-content:center;
}
.passcode__box {
  width:44px;height:54px;
  background:#fff;
  border:2px solid rgba(0,0,0,.1);
  border-radius:8px;
  font-family:var(--font-mono),monospace;
  font-size:1.3rem;font-weight:700;
  text-align:center;
  text-transform:uppercase;
  color:#2D2D2D;
  outline:none;
  transition:border-color .2s, box-shadow .2s;
  caret-color:#D4A373;
}
.passcode__box:focus {
  border-color:#D4A373;
  box-shadow:0 0 0 3px rgba(212,163,115,.15);
}

/* ═══════════════════════════════════════════
   SURFACE (main view)
   ═══════════════════════════════════════════ */
.surface {
  position:fixed;inset:0;overflow:hidden;
  opacity:0;transition:opacity 1s ease;
}
.surface--in { opacity:1; }

.surface__head {
  position:absolute;top:2.5%;left:0;right:0;
  text-align:center;z-index:10;
  animation:fadeUp 1s ease .3s forwards;opacity:0;
}
.surface__pre {
  font-family:var(--font-mono),monospace;font-size:.55rem;
  letter-spacing:.35em;color:#B5AFA8;text-transform:uppercase;
  margin-bottom:.3rem;display:block;
}
.surface__title {
  font-family:var(--font-hand),cursive;font-size:2.8rem;
  color:#2D2D2D;line-height:1.2;margin-bottom:.2rem;
}
.surface__sub {
  font-family:var(--font-body),sans-serif;font-size:.78rem;
  color:#8B8680;
}

/* ═══════════════════════════════════════════
   STICKER
   ═══════════════════════════════════════════ */
.sticker {
  position:absolute;z-index:5;
  background:none;border:none;padding:0;
  cursor:pointer;
  transition:filter .3s ease;
  animation:stickerIn .6s ease forwards;
  opacity:0;
  display:flex;flex-direction:column;align-items:center;
}
.sticker:hover {
  z-index:15;
  filter:brightness(1.05);
}
.sticker--done {
  opacity:.4 !important;
  filter:grayscale(.4);
}
.sticker__img {
  width:110px;height:110px;!import
  object-fit:contain;
  filter:drop-shadow(2px 4px 6px rgba(0,0,0,.12));
  transition:transform .3s ease;
  pointer-events:none;
}
.sticker:hover .sticker__img {
  transform:scale(1.12);
}
.sticker__fallback {
  width:110px;height:110px;
  display:flex;align-items:center;justify-content:center;
  font-size:3.5rem;
  background:rgba(255,255,255,.7);
  border-radius:16px;
  border:2px dashed rgba(0,0,0,.12);
  filter:drop-shadow(2px 4px 6px rgba(0,0,0,.08));
  transition:transform .3s ease;
}
.sticker:hover .sticker__fallback {
  transform:scale(1.12);
}
.sticker__label {
  margin-top:8px;
  font-family:var(--font-mono),monospace;
  font-size:.75rem;letter-spacing:.2em;
  color:#3D3D3D;text-transform:uppercase;
  white-space:nowrap;
}

/* ═══════════════════════════════════════════
   SPECIMEN MODAL
   ═══════════════════════════════════════════ */
.modal-overlay {
  position:fixed;inset:0;
  background:rgba(0,0,0,.3);backdrop-filter:blur(6px);
  display:flex;align-items:center;justify-content:center;
  z-index:100;animation:fadeIn .3s ease;
}
.modal {
  position:relative;background:#FFFCF8;
  border:1px solid rgba(0,0,0,.08);
  border-radius:14px;max-width:650px;width:92%;
  overflow:hidden;animation:cardIn .4s ease;
  box-shadow:0 16px 48px rgba(0,0,0,.1),0 4px 12px rgba(0,0,0,.06);
}
.modal__bar { height:4px;width:100%; }
.modal__head {
  display:flex;align-items:center;justify-content:space-between;
  padding:1.2rem 3rem .5rem 1.8rem;
}
.modal__num {
  font-family:var(--font-mono),monospace;font-size:.6rem;
  letter-spacing:.25em;color:#B5AFA8;text-transform:uppercase;
}
.modal__tag {
  font-family:var(--font-body),sans-serif;font-size:.55rem;
  letter-spacing:.12em;text-transform:uppercase;
  border:1px solid;padding:.2rem .65rem;border-radius:20px;
}
.modal__photos {
  display:flex;gap:6px;padding:.5rem 1.8rem 0;height:260px;
}
.modal__photo {
  flex:1;border-radius:8px;overflow:hidden;cursor:pointer;
  opacity:.45;transition:opacity .3s,flex .4s ease;
  border:2px solid transparent;
}
.modal__photo--active {
  opacity:1;flex:2.2;border-color:rgba(0,0,0,.08);
}
.modal__photo img {
  width:100%;height:100%;object-fit:cover;display:block;
}
.modal__dots {
  display:flex;justify-content:center;gap:6px;padding:.6rem 0 .2rem;
}
.modal__dot {
  width:6px;height:6px;border-radius:50%;
  background:rgba(0,0,0,.1);border:none;cursor:pointer;
  transition:all .3s;padding:0;
}
.modal__dot--on { transform:scale(1.4); }
.modal__title {
  font-family:var(--font-hand),cursive;font-size:1.7rem;
  color:#2D2D2D;padding:0 1.8rem;margin-bottom:.6rem;
}
.modal__body {
  font-family:var(--font-body),sans-serif;font-size:.92rem;
  color:#5A5550;line-height:1.8;padding:0 1.8rem 2rem;
}
.modal__close {
  position:absolute;top:.5rem;right:.5rem;
  color:#B5AFA8;font-size:1.2rem;cursor:pointer;
  transition:color .2s;padding:.3rem;
}
.modal__close:hover { color:#666; }

/* ═══════════════════════════════════════════
   SURFACE TRIGGER (one last thing button)
   ═══════════════════════════════════════════ */
.surface__trigger {
  position:fixed;bottom:4%;left:50%;
  transform:translateX(-50%);
  z-index:20;background:#2D2D2D;border:none;color:#F4EDE4;
  font-family:var(--font-mono),monospace;font-size:.75rem;
  letter-spacing:.2em;text-transform:uppercase;
  padding:.65rem 2.2rem;cursor:pointer;border-radius:4px;
  transition:all .3s;animation:fadeIn .5s ease;
}
.surface__trigger:hover { background:#444; }

/* ═══════════════════════════════════════════
   FINALE
   ═══════════════════════════════════════════ */
.finale {
  position:fixed;inset:0;
  z-index:200;overflow:hidden;
}
.finale__scroll-container {
  position:absolute;inset:0;
  overflow-y:auto;
  z-index:10;
  scroll-behavior:smooth;
}
.finale__emoji {
  font-size:3.5rem;margin-bottom:1rem;
  animation:float 3s ease-in-out infinite;
}

/* ─── THE LETTER ─── */
.letter {
  min-height:100vh;
  display:flex;align-items:center;justify-content:center;
  padding:4rem 2rem;
}
.letter__inner {
  background:#FFFDF9;
  border:1px solid rgba(0,0,0,.06);
  border-left:4px solid #D4A373;
  border-radius:4px 12px 12px 4px;
  padding:3rem 3rem 2.5rem;
  max-width:560px;width:100%;
  text-align:center;
  box-shadow:
    0 2px 12px rgba(0,0,0,.04),
    0 8px 32px rgba(0,0,0,.03),
    inset 0 0 80px rgba(212,163,115,.03);
  animation:finIn 1.5s ease forwards;
}
.letter__title {
  font-family:var(--font-hand),cursive;font-size:2.8rem;
  color:#2D2D2D;line-height:1.2;margin-bottom:1rem;
}
.letter__divider {
  width:50px;height:2px;
  background:linear-gradient(90deg,transparent,#D4A373,transparent);
  margin:0 auto 1rem;
}
.letter__date {
  font-family:var(--font-mono),monospace;font-size:.7rem;
  letter-spacing:.25em;color:#B5AFA8;text-transform:uppercase;
  margin-bottom:2rem;
}
.letter__body {
  font-family:var(--font-body),sans-serif;font-size:1rem;
  color:#5A5550;line-height:1.9;margin-bottom:1.2rem;
  text-align:left;
}
.letter__sig {
  font-family:var(--font-hand),cursive;font-size:1.5rem;
  color:#D4A373;margin-top:1.5rem;
}

/* ─── scroll hint ─── */
.scroll-hint {
  text-align:center;padding:0 0 3rem;
  animation:fadeIn 1.5s ease 2s forwards;
  opacity:0;
}
.scroll-hint span {
  font-family:var(--font-mono),monospace;font-size:.65rem;
  letter-spacing:.2em;color:#B5AFA8;text-transform:uppercase;
}
.scroll-hint__arrow {
  display:block;margin-top:.3rem;
  animation:bounceDown 1.5s ease-in-out infinite;
}

/* ─── legal at 21 list ─── */
.legal {
  max-width:520px;margin:0 auto;padding:3rem 2rem 2rem;
  opacity:0;transform:translateY(20px);
  transition:opacity .8s ease,transform .8s ease;
}
.legal--in {
  opacity:1;transform:translateY(0);
}
.legal__title {
  font-family:var(--font-hand),cursive;font-size:1.8rem;
  color:#2D2D2D;text-align:center;margin-bottom:.3rem;
}
.legal__sub {
  font-family:var(--font-body),sans-serif;font-size:.75rem;
  color:#B5AFA8;text-align:center;margin-bottom:1.5rem;
  font-style:italic;
}
.legal__list {
  list-style:none;padding:0;
}
.legal__item {
  font-family:var(--font-body),sans-serif;font-size:.9rem;
  color:#5A5550;line-height:1.6;
  padding:.6rem 1rem;
  background:#fff;
  border:1px solid rgba(0,0,0,.04);
  border-radius:8px;
  margin-bottom:.5rem;
  opacity:0;animation:fadeUp .4s ease forwards;
}
.legal--in .legal__item {
  opacity:0;animation:fadeUp .4s ease forwards;
}
.legal__copy {
  display:block;margin:1.2rem auto 0;
  background:#2D2D2D;border:none;color:#F4EDE4;
  font-family:var(--font-mono),monospace;font-size:.7rem;
  letter-spacing:.15em;text-transform:uppercase;
  padding:.55rem 1.8rem;cursor:pointer;border-radius:4px;
  transition:all .3s;
}
.legal__copy:hover { background:#444; }

/* replay */
.finale__replay {
  background:transparent;border:1px solid rgba(0,0,0,.12);
  color:#8B8680;font-family:var(--font-mono),monospace;font-size:.75rem;
  letter-spacing:.15em;padding:.5rem 2rem;cursor:pointer;
  border-radius:4px;transition:all .3s;text-transform:uppercase;
  margin-top:2rem;
}
.finale__replay:hover { border-color:rgba(0,0,0,.25);color:#555; }

/* confetti */
.confetti {
  position:fixed;pointer-events:none;z-index:5;
  animation:confettiDrop 3.5s ease-in-out infinite;
}

/* ─── keyframes ─── */
@keyframes fadeIn { from{opacity:0} to{opacity:1} }
@keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
@keyframes cardIn { from{opacity:0;transform:scale(.95) translateY(6px)} to{opacity:1;transform:scale(1) translateY(0)} }
@keyframes stickerIn { from{opacity:0} to{opacity:1} }
@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
@keyframes finIn { from{opacity:0;transform:scale(.96) translateY(12px)} to{opacity:1;transform:scale(1) translateY(0)} }
@keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-5px)} 80%{transform:translateX(5px)} }
.shake { animation:shake .5s ease; }
@keyframes confettiDrop {
  0% { opacity:0; transform:translateY(-20px) rotate(0deg) scale(0); }
  20% { opacity:1; transform:translateY(0) rotate(90deg) scale(1); }
  80% { opacity:1; }
  100% { opacity:0; transform:translateY(60px) rotate(360deg) scale(.6); }
}
@keyframes bounceDown {
  0%,100% { transform:translateY(0); }
  50% { transform:translateY(6px); }
}
`;

export default STYLES;
