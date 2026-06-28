'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  shop: [
    { label: 'Tous les produits', href: '/shop' },
    { label: 'Nouveaux arrivages', href: '/shop' },
    { label: 'Meilleures ventes', href: '/shop' },
    { label: 'Soldes', href: '/shop' },
  ],
  support: [
    { label: 'Nous contacter', href: '/contact' },
    { label: 'Infos livraison', href: '/delivery' },
    { label: 'Retours', href: '/delivery' },
    { label: 'FAQ', href: '/contact' },
  ],
  company: [
    { label: 'À propos', href: '/about' },
    { label: 'Carrières', href: '/about' },
    { label: 'Presse', href: '/about' },
    { label: 'Durabilité', href: '/about' },
  ],
  legal: [
    { label: 'Politique de confidentialité', href: '/privacy' },
    { label: 'Conditions d’utilisation', href: '/terms' },
    { label: 'Politique de cookies', href: '/privacy' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'Youtube' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-bold">
                  NdalluNgaay
                </span>
              </Link>
              <p className="text-gray-400 text-sm mb-6 max-w-xs">
                Produits lifestyle soigneusement sélectionnés pour le consommateur moderne. Qualité, durabilité et design dans chaque pièce.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-400 text-sm">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>Avenue Général de Gaulle, Île de Saint-Louis, Sénégal</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>contact@saintlouisshoes.sn</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>+221 77 123 45 67</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Boutique
              </h3>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-amber-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-amber-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Entreprise
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-amber-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Légal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-amber-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              (c) {new Date().getFullYear()} Maketbi. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6">
              <img
                src="https://cdn-icons-png.flaticon.com/128/349/349221.png"
                alt="Visa"
                className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/349/349228.png"
                alt="Mastercard"
                className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/349/349230.png"
                alt="Amex"
                className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/888/888870.png"
                alt="PayPal"
                className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
