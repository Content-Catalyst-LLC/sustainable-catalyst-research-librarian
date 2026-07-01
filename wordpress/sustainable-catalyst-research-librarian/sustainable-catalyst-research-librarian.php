<?php
/**
 * Plugin Name: Sustainable Catalyst Research Librarian
 * Description: A guided navigation assistant for Sustainable Catalyst demos, modules, repositories, methodology, and learning pathways.
 * Version: 0.1.0
 * Author: Content Catalyst LLC
 * License: MIT
 * Text Domain: sustainable-catalyst-research-librarian
 */

if (!defined('ABSPATH')) {
    exit;
}

define('SCRL_VERSION', '0.1.0');
define('SCRL_PLUGIN_URL', plugin_dir_url(__FILE__));

final class Sustainable_Catalyst_Research_Librarian {
    public function __construct() {
        add_shortcode('sustainable_catalyst_research_librarian', array($this, 'render_shortcode'));
        add_action('wp_enqueue_scripts', array($this, 'register_assets'));
    }

    public function register_assets() {
        wp_register_style(
            'sustainable-catalyst-research-librarian',
            SCRL_PLUGIN_URL . 'assets/research-librarian.css',
            array(),
            SCRL_VERSION
        );

        wp_register_script(
            'sustainable-catalyst-research-librarian',
            SCRL_PLUGIN_URL . 'assets/research-librarian.js',
            array(),
            SCRL_VERSION,
            true
        );
    }

    public function render_shortcode($atts = array()) {
        wp_enqueue_style('sustainable-catalyst-research-librarian');
        wp_enqueue_script('sustainable-catalyst-research-librarian');

        $instance_id = 'scrl-agent-' . wp_generate_uuid4();

        ob_start();
        ?>
        <section id="<?php echo esc_attr($instance_id); ?>" class="scrl-agent" data-scrl-agent>
            <div class="scrl-agent__header">
                <p class="scrl-agent__eyebrow">Sustainable Catalyst Research Librarian</p>
                <h2>Find the right starting point</h2>
                <p>
                    Use the guided assistant to choose a Sustainable Catalyst demo, module, repository, methodology page,
                    feature-suggestion path, or learning route. The assistant is scoped to navigation and learning.
                </p>
            </div>

            <div class="scrl-agent__boundary" role="note">
                <strong>Boundary:</strong>
                <span>This is a navigation and learning assistant. It does not provide legal, financial, investment, medical, mental health, tax, compliance, assurance, ESG/SDG certification, or professional advice.</span>
            </div>

            <div class="scrl-agent__layout">
                <div class="scrl-agent__controls">
                    <label class="scrl-agent__label" for="<?php echo esc_attr($instance_id); ?>-goal">What are you trying to do?</label>
                    <select id="<?php echo esc_attr($instance_id); ?>-goal" class="scrl-agent__select" data-scrl-goal>
                        <option value="">Choose a goal...</option>
                        <option value="problem">Frame a problem or design an experiment</option>
                        <option value="data">Create a measurement or evidence record</option>
                        <option value="scenario">Run a sustainability scenario</option>
                        <option value="impact">Measure impact or progress</option>
                        <option value="claim">Review a risky claim or narrative</option>
                        <option value="finance">Evaluate a financial tradeoff</option>
                        <option value="grit">Track recovery after a setback</option>
                        <option value="methodology">Understand the methodology</option>
                        <option value="library">Explore the knowledge library</option>
                        <option value="github">Inspect repositories or code</option>
                        <option value="suggest">Suggest a feature or report an issue</option>
                        <option value="consulting">Get help applying the platform</option>
                    </select>

                    <label class="scrl-agent__label" for="<?php echo esc_attr($instance_id); ?>-query">Or ask in your own words</label>
                    <textarea id="<?php echo esc_attr($instance_id); ?>-query" class="scrl-agent__textarea" data-scrl-query rows="5" placeholder="Example: I need to compare sustainability scenarios and explain the assumptions behind the results."></textarea>

                    <div class="scrl-agent__actions">
                        <button type="button" class="scrl-agent__button scrl-agent__button--primary" data-scrl-run>Ask the Research Librarian</button>
                        <button type="button" class="scrl-agent__button" data-scrl-reset>Reset</button>
                    </div>

                    <div class="scrl-agent__quick">
                        <p>Quick routes</p>
                        <button type="button" data-scrl-quick="problem">Problem framing</button>
                        <button type="button" data-scrl-quick="data">Data records</button>
                        <button type="button" data-scrl-quick="scenario">Scenario analysis</button>
                        <button type="button" data-scrl-quick="impact">Impact</button>
                        <button type="button" data-scrl-quick="claim">Claim review</button>
                        <button type="button" data-scrl-quick="finance">Finance</button>
                        <button type="button" data-scrl-quick="grit">Recovery</button>
                        <button type="button" data-scrl-quick="methodology">Method</button>
                    </div>
                </div>

                <div class="scrl-agent__results" data-scrl-results aria-live="polite">
                    <div class="scrl-agent__empty">
                        <strong>Start by choosing a goal or asking a question.</strong>
                        <p>The Research Librarian will recommend the best Sustainable Catalyst starting point and explain why.</p>
                    </div>
                </div>
            </div>

            <div class="scrl-agent__footer">
                <a href="/platform/demos/">Platform Demos</a>
                <a href="/platform/methodology/">Methodology</a>
                <a href="/platform/feature-suggestions/">Suggest a Feature</a>
                <a href="https://github.com/Content-Catalyst-LLC" target="_blank" rel="noopener">GitHub</a>
            </div>
        </section>
        <?php
        return ob_get_clean();
    }
}

new Sustainable_Catalyst_Research_Librarian();
